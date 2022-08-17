//CSS
import './App.css';

//React 
import {useCallback, useEffect, useState} from 'react';

//data
import {wordsList} from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import End from './components/End';

const stages =[
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //
  const[pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //random catyegory 
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  }


  //Start the secret word game
  const startGame = () =>{
    //pick wor and pick category
    const {word, category} = pickWordAndCategory();

    //create array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(word, category);
    console.log(wordLetters);

    setGameStage(stages[1].name);
  }

  //process the letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
  }

  //reset the game
  const retry = () =>{
    setGameStage(stages[0].name);
  }



  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <End retry={retry}/>}
    </div>
  );
}

export default App;
