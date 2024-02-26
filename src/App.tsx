import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState({ width: window.outerWidth, height: window.outerHeight })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize({ width: window.outerWidth, height: window.outerHeight })
    })
    return () => {
      window.removeEventListener('resize', () => {
        setSize({ width: window.outerWidth, height: window.outerHeight })
      })
    }
  }, [])
  return (
    <div className='container'>
      <h1>Your device is {size.width} x {size.height}</h1>
    </div>
  )
}

export default App
