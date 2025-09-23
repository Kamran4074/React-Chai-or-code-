import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(0);

  const increase= function(){
    if(counter<20){
      setCounter(counter+1);
    }
  }
  const decrease= function(){
    if(counter> 0){
      counter=counter-1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter project</h1> 
      <h2>Counter vale: {counter}</h2>
      <button onClick={increase}>Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
