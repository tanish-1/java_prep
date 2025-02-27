import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
// import './index.css'
// import App from './App.jsx'

// function MyApp() {
//   return(
//     <>
//     <h1>custom myapp</h1>
//     </>
//   )
// }

// const ReactElemet  = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

// const AnotherElemet = (
//   <a href="http://google.com" target="_blank ">Visit Google</a>
// )
// const ReactElemet  = React.createElement(
//   'a',
//   {href: 'http://google.com',  target: '_blank' },
//   'click me to visit google'
// )
const anotherUser = "hello world"
const  ReactElemet = React.createElement(
  'a',
   {href: 'http://google.com',  target: '_blank' },
    'click me to visit google',
    anotherUser
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      { ReactElemet }
  </StrictMode>
)
