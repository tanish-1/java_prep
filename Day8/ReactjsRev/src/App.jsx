
import './App.css'
import AnotherHero from './component/AnotherHero'
// import HeroSection from './component/HeroSection'

function App() {


  return (
    <>
     {/* <h1 className='bg-green-400 p-4'>chai aur react</h1> */}
      <AnotherHero channel="Chai Aur Code" myName = {{name:"tanish"}}/>
      {/* <HeroSection/> */}
      <AnotherHero channel="hiii" myName = {{}}/>
    </>
  )
}

export default App
