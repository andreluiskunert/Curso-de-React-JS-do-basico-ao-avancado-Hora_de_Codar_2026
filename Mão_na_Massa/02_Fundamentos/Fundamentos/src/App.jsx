import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// 01ª importando componentes
import FirstComponent from './components/FistComponent';
// 02ª template expression
import TemplateExpression from './components/TemplateExpression'
function App() {
  return <div>
   <h1>Fundamentos do React</h1>
   {/**02ª componentes */}
   <FirstComponent/>
   {/*aqui tem um 
   comentário de 
   várias 
   linhas ...
   */}
   <TemplateExpression/>
   
  </div>
 
}

export default App
