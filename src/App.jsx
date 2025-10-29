import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'

function App() {
  const [counter, setCounter] = useState(0)

  return  <>
      <h1>hello react 19</h1>
      <h1>Counter val : {counter}</h1>
      <User />
      <button onClick={()=>setCounter(counter+1)}>Increase Counter</button>
    </>
  
}

export default App
