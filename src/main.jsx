import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppTarefas from './pages/Tarefas/AppTarefas.jsx'
import './tema.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<AppTarefas />*/}  
    { <App /> }
  </StrictMode>,
)
