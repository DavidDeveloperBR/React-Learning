import React from 'react'

const ChangeMessageState = ({handleMessage}) => {

    const messages = ["Oi", "olá", "bom dia", "boa tarde", "boa noite"];
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[3])}>2</button>
        <button onClick={() => handleMessage(messages[4])}>3</button>
    </div>
  )
}

export default ChangeMessageState