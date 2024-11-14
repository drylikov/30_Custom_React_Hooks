import React from 'react'
import useDarkMode from './useDarkMode'

export default function DarkModeComponent() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <button onClick={() => setDarkMode(prev => !prev)} style={{
      border: `1px solid ${darkMode ? "white" : "black"}`,
      background: "none",
      color: darkMode ? "white" : "black"
    }}>
      Toggle dark mode
    </button>
  )
}
