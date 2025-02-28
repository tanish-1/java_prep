import { useState } from 'react';
import './App.css'

function App() {

let [counter,setCounter] = useState(0)

const addValue = () => {
  if(counter === 20) return;
  setCounter(counter + 1);
  console.log(counter);
};

const removeValue = () => {
  if (counter<=0) return;
  setCounter(counter - 1);
}

  return (
    <>
     <h1>chai aur react</h1>
     <h1>counter value : {counter}</h1>
     
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
