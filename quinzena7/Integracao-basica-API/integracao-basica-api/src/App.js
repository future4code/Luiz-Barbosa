import React from 'react'
// import TelaCadastro from './components/telaCadastro.js'
import styled from 'styled-components'
import axios from 'axios'
import TelaListaUsuarios from './components/telaListaUsuarios'
import TelaCadastro from './components/telaCadastro'

// const body = {
//   "name": "Kanye West",
//   "email": "kanyesux@hotmail.com"
// }

// axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
//   headers: {
//     "Authorization" : "luiz-pereira-muyembe"
//   }
// }).then((response) => {
//   console.log(response.data)
// }).catch((error) => {
//   console.log(error.response.data)
// })




export class App extends React.Component {
state = {
  inputValueNome : '',
  inputValueEmail: '',
  criarUsuario: true
}

  onChangeInputNome = (event) => {
    this.setState({inputValueNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputValueEmail: event.target.value})
  }

  onClickTrocaTela = () => {
    this.setState({criarUsuario: !this.state.criarUsuario})
  }


	render() {
  //  
		return <div className={'App-Container'}>
      <div>{this.state.criarUsuario ? <TelaCadastro/> : <TelaListaUsuarios/>}</div>
     <div><button onClick = {this.onClickTrocaTela}>{this.state.criarUsuario ? 'Ver lista de Usuários' : 'Home'}</button></div>
		</div>
	}
}


export default App;