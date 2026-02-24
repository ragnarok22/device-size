import { useEffect, useState } from 'react'
import '@theme-toggles/react/css/Classic.css'
import { Classic } from '@theme-toggles/react'
import './App.css'

function App() {
  const [size, setSize] = useState({ width: window.outerWidth, height: window.outerHeight })
  const [isDark, setIsDark] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const switchMode = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setIsDark(true)
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
    <div className="flex h-screen w-screen items-center justify-center bg-white transition duration-500 dark:bg-gray-800 dark:text-gray-200">
      <h1 className="container text-center text-3xl font-bold">
        Your device is
        <span className="block md:ml-1 md:inline">
          {size.width} x {size.height}
        </span>
      </h1>

      <Classic
        toggle={setIsDark}
        toggled={!isDark}
        className="absolute top-2 right-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
        onToggle={switchMode}
        placeholder={isDark ? '🌙' : '☀️'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  )
}

export default App
