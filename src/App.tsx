import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState({ width: window.outerWidth, height: window.outerHeight })
  const [theme, setTheme] = useState(localStorage.theme || 'light')

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const switchMode = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }

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
    <div className='flex justify-center items-center w-screen h-screen bg-white dark:bg-gray-800 dark:text-gray-200'>
      <h1 className='container text-center font-bold text-3xl'>
        Your device is
        <span className='block md:inline md:ml-1'>{size.width} x {size.height}</span>
      </h1>

      <button onClick={switchMode} className='absolute top-1 right-1'>
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default App
