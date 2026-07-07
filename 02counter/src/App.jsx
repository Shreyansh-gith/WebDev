import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //useState : hook : Returns a stateful value, and a function to update it.
  //useState : outputs an array of size 2
  //setCounter : function
  //counter : variable
  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    counter = counter + 1;
    if(counter<=20){
      console.log("clicked",counter);
      setCounter(counter)
    }
    else{
      counter = 0;
      setCounter(0)
    }
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter>=0){
      console.log("clicked",counter);
      setCounter(counter)
    }
    else{
      counter = 0;
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button><br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
