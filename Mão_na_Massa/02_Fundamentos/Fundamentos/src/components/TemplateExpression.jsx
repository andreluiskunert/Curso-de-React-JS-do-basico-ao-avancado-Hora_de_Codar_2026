// import React from 'react' era é necessário antigamente

const TemplateExpression = () => {
    const name = "Andre Luis Kunert";
    const data = {
         age: 44,
         job: "Desenvolvedor Full Stack"
    }
  return (
    <div>
      <p> A soma é {2+2 } </p>
      <h3>Welcome {name}</h3>
      <p> Idade:{data.age} <br />  Profissão:{data.job}</p>
    </div>
  )
}

export default TemplateExpression
