import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Paragrafo from './Paragrafo'
import CaixaTexto from './CaixaTexto'

function App() {
  const [num, setNum] = useState(1)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Comece!</h1>
        </div>
        
        <CaixaTexto />

        <Paragrafo nome="Fulano" />
        <Paragrafo nome="Beltrano" />


      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App