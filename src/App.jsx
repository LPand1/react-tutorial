import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'

function App() {
  const [num, setNum] = useState(1)

  return (
    <ThemeProvider>
      <div>
        <nav>Menu de navegação</nav>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  )
}

export default App