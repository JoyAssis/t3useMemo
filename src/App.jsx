import React, { useState, useMemo } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState([]);
  const [count, setCount] = useState(0);
  const aleatorio = useMemo(()=> count * Math.random(),[count]);

function handleAdd(){
  setTarefas([...tarefas, input])
}//spread
// tarefas: [[estudar], [correr]]
//tarefas: [ comer]
// tarefas:[estudar, correr, comer]

const totalTarefas = useMemo(()=> tarefas.length,[tarefas] )
  return (
    <>
    <h1>nova atualização</h1>
      <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={handleAdd}>Adicionar</button>
      {tarefas.map((tarefas)=>(
        <li>{tarefas}</li>
      ))}
      <h3>Você tem {totalTarefas} tarefas para fazer!</h3>
      <h3>{count}</h3>
      <button onClick={()=> {setCount(count +1)}} >+1</button>
      <h3>multiplicando count por um numero aleatorio: {aleatorio}</h3>
    </>
  );
}
