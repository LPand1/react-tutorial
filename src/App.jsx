import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'
import Home from './pages/Tarefas/Home';
import AppTarefas from './pages/Tarefas/AppTarefas';
import Sobre from './pages/Tarefas/Sobre';

function App() {
  const [num, setNum] = useState(1)

  return (
    <ThemeProvider>
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to ="/">Home</Link></li> 
            <li><Link to ="/tarefas">Tarefas</Link></li>
            <li><Link to ="/sobre">Sobre</Link></li>
          </ul>
        </nav>
        <ThemeToggleButton />
      </div>
      {/* Define as rotas (links) */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tarefas' element={<AppTarefas/>} />
          <Route path='/sobre' element={<Sobre/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App