import React, { useState } from 'react'

 const App = () => {

//  const IncrementBtn = () => {
//   setCount(prevCounter =>prevCounter+1) // 1
//   setCount(prevCounter =>prevCounter-1) // 0
//   setCount(prevCounter =>prevCounter+1) // 1
//   setCount(prevCounter =>prevCounter+1) // 2
  
// setCount(count + 1);
// setCount(count + 1);
// setCount(count + 1);
// setCount(count - 1);
// };
const [color, setColor] = useState("olive");
const handleRed = () =>{
 setColor("red")
}
const handleGreen = () =>{
 setColor("green")
}
const handleBlue = () =>{
  setColor("blue")
 }
 const handleOrange = () =>{
  setColor("orange")
 }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl cursor-pointer'>
         <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "red"}} onClick={handleRed}>Red</button>
         <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "Green"}} onClick={handleGreen}>Green</button>
         <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "Blue"}} onClick={handleBlue}>Blue</button>
         <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "Orange"}} onClick={handleOrange}>Orange</button>
        </div>
      </div>
      </div>
  )
}

export default App;