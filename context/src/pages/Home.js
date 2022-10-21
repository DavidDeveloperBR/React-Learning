//import { useContext } from "react";
import ChangerCounter from "../components/ChangerCounter";
//import {CounterContext} from "../context/CounterContext";

//refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
//const {counter} = useContext(CounterContext);
const {counter} = useCounterContext();

const {color, dispatch} = useTitleColorContext();

// alterando o contexto complexo
const setTitleColor = (color) =>{
  dispatch({type: color});
}

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterando context */}
      <ChangerCounter/>
      {/* alterando o contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home