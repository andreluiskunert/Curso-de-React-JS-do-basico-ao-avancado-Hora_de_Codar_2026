import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// 2ª Imagem em assets
import night from "./assets/night.jpg"
// 3ª useState
import Data from './components/Data'

// 4ª Renderização de lista
import ListRender from './components/ListRender';

function App() {
  

  return (
    <>
      <section>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div className="App" style={{paddingBottom: "500px"}}>
         <h1>Avançando em React </h1>
         {/* 1ª Imagem em public */}
         <img src="/img.jpg" alt="Uma rua"  />
         {/* 2ª Imagem em assets */}
          <img src={night} alt="De noite"  />
          {/* 3ª useState */}
          <Data/>
          {/* 4ª Renderização de lista */}
          <ListRender/>
          {/*  */}
          
          
        </div>
      </section>

      
    </>
  )
}

export default App
