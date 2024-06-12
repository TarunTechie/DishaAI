import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to='/login'><h1 className='text-3xl font-bold font-chalk bg-black text-white'>DISHA AI</h1></Link>
    </>
  )
}

export default App
