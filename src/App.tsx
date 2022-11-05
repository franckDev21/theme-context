import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import ToolBar from './components/ToolBar'
import ThemeContext from './ThemeContext'
import { ThemeContextProps } from './type'

function App() {
  const [theme, setTheme] = useState('dark')

  const contextValue: ThemeContextProps = {
    theme,
    updateTheme: (name) => { setTheme(name) }
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`App ${theme}`}>
        <ToolBar />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
