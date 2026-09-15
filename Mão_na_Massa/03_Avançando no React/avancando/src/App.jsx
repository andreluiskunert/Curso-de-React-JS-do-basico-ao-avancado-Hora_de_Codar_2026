import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// 2ª Imagem em assets
import night from "./assets/night.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
         <h1>Avançando em React </h1>
         {/* 1ª Imagem em public */}
         <img src="/img.jpg" alt="Uma rua"  />
         {/* 2ª Imagem em assets */}
          <img src={night} alt="De noite"  />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
