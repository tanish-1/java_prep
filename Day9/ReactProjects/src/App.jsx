import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqprstuvwxyz" 
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ "

    for(let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
   setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  
  const copyPasswordToClickBoard = useCallback(()=>{
    passwordRef.current?.select()  // Selects the text inside the input
    passwordRef.current?.setSelectionRange(0,3) // Selects the text inside the input with specfic range 
         window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword,passwordGenerator])
 
  const passwordRef = useRef(null)

  const handleForm = (e) =>{
     e.preventDefault()
     console.log("submittedForm",e)
  }
  return (
    <>
      {/* <h1 className='text-4xl text-center text-white'>Password Generator </h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center">Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
           value={password} 
           className="outline-none w-full py-1 px-3 bg-white text-black"
           placeholder='Password' 
           ref={passwordRef}
           readOnly
          />
          <button 
          onClick={copyPasswordToClickBoard}
          className="outline-none bg-blue-700 text-white">Copy</button>
         
        </div>

        <div>
            <div>
              <input 
              type="range" 
               min={6}
               max={100}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}}/>
               <label>Length : {length}</label>
            </div>

            <div>
              <input type="checkbox" 
               defaultChecked={numberAllowed}
               id='numberInput'
               onChange={()=>{
                setNumberAllowed((prev)=> !prev)
               }}
               />
               <label htmlFor="numberInput">Numbers</label>
            </div>

            <div>
              <input type="checkbox" 
               defaultChecked={numberAllowed}
               id='charInput'
               onChange={()=>{
                setCharAllowed((prev)=> !prev)
               }}
               />
               <label htmlFor="charInput">Characters</label>
            </div>

          </div>
      </div>

      <div>
        <form onSubmit={(e)=>{
          handleForm(e)
        }}>
          <input type="text"  className="outline-none  py-1 px-3 bg-white text-black" placeholder='Enter your name'/>
          <button className='text-white'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
