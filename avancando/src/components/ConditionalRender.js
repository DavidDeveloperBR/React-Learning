import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("David");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p> Se x for true, sim!</p>}
        {!x && <p>Agora x é false</p>}
        <h3>If Ternário</h3>
        {name === "David" ? (<p>Sim</p>):(<p>Não</p>)}
        <button onClick = {()=> setName("João")}>Mudando o Nome</button>
    </div>
  )
}

export default ConditionalRender