import { useState } from 'react'
import './App.css'
import Root from './components/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Root></Root>
    </div>
  )
}

export default App
