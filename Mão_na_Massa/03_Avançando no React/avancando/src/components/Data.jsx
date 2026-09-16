import { useState } from "react"
// Terça-feira,15/09/2026

const Data = () => {
  let someData = 10;
  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
       <div>
        <p>valor: {someData}</p>
        <button onClick={() => (someData = 15)}> mudar Variável </button>
       </div>
       <div>
        <p> Valor: {anotherNumber}</p>
        <button  onClick={() => setAnotherNumber(20)}>mudar valor</button>
       </div>
    </div>
  )
}

export default Data
