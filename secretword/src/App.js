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

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //
  const[pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //random catyegory 
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  },[words]);


  //Start the secret word game
  const startGame = useCallback(() =>{
    clearLetterStates();

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
  }, [pickWordAndCategory]);

  //process the letter input
  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase();

    //Checar se a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter) ){
      return;
    }
      // Inclui um tentativ ou remova a tentativa
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //check if guesses ended
  useEffect(() => {
    if(guesses <= 0){
      //resetar todos os estados
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  //check win conditional
  useEffect(() =>{
    
    const uniqueLetters = [... new Set(letters)];

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100);

      //restart game
      startGame();

    }
  }, [guessedLetters, letters, startGame])

  //reset the game
  const retry = () =>{
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }



  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} 
        pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters}
        guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === "end" && <End retry={retry} score={score}/>}
    </div>
  );
}

export default App;
