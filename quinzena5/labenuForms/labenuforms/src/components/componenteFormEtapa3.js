import React from 'react'


class FormularioEtapa3 extends React.Component {
	render() {
    return <div>
        <h3>"{"ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"}</h3>
        <p>{"5. Por que você não terminou um curso de graduação?"}</p>
        <input/>
        <p>{"6. Você fez algum curso complementar?"}</p>
        <select>
        <option value="Nenhum">Nenhum</option>
        <option value="Curso Técnico">Curso Técnico</option>
        <option value="Curso de Inglês">Curso de Inglês</option>
        </select>
	</div>
    } 
}

export default FormularioEtapa3;