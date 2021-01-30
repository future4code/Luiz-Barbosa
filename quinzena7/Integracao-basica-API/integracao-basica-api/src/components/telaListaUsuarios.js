import React from 'react'

export class TelaListaUsuarios extends React.Component {
	render() {
  //  Tela de cadastro
		return <div className={'App-Container'}>
      <h1>{this.props.titulo}</h1>
      <label>Nome:</label>
      <input/>
      <label>E-mail:</label>
      <input/>

		</div>
	}
}

export default TelaListaUsuarios;