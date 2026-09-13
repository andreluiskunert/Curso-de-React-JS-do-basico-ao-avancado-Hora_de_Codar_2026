import React from 'react'

const Events = () => {
    // criando função
    const handleClick = (e) =>{
        console.log("tenho a acesso ao Evento:", e);
        // console.log(e);
       console.log("Executou")
    }
    // Função e Renderização
     const renderSomething = (x)=>{
        if (x) {
            return <h2> Rendizando isso! </h2>
        }else{
            return <h2> Rendizando outra coisa! </h2>
        }
     }
    //  return 10 > 2 && <p>carregando...</p>
  return (
    <div>
      <button onClick={() => console.log("Testando um Evento")}>clque aqui</button>
      {/* 7- evento com função */}
      <div>
        <button onClick={handleClick}>Executar </button>
        {/* Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  )
}

export default Events
