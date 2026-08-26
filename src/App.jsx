import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Paragrafo from './Paragrafo'
import CaixaTexto from './pages/Tarefas/CaixaTexto'
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