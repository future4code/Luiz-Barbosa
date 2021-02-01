import React from 'react'


class DropDownHome extends React.Component {
	render() {
    return <div>
        <p>{'4. Qual a sua escolaridade?'}</p>
        <select>
          <option value="Ensino medio incompleto">Ensino Médio Incompleto</option>
          <option value="Ensino médio completo">Ensino Médio Completo</option>
          <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
          <option value="Ensino Superior Completo">Ensino Superior Completo</option>
        </select> 
	</div>
    } 
}

export default DropDownHome;