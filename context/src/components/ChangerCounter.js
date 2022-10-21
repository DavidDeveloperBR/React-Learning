// alterando o contexto

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangerCounter = () => {
const {counter, setCounter} = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add value to count</button>
    </div>
  )
}

export default ChangerCounter