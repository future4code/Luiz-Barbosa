import React from 'react'
// import TelaCadastro from './components/telaCadastro.js'
import styled from 'styled-components'
import axios from 'axios'

const body = {
  "name": "Kanye West",
  "email": "kanyesux@hotmail.com"
}

axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
  headers: {
    "Authorization" : "luiz-pereira-muyembe"
  }
}).then((response) => {
  console.log(response.data)
}).catch((error) => {
  console.log(error.response.data)
})


const MainContainer = styled.div `
  height: 100vh;
  width: 100vw;
  place-content: center;
  background-color: tomato;
`

export class App extends React.Component {
state = {
  inputValueNome : '',
  inputValueEmail: ''
}

  onChangeInputNome = (event) => {
    this.setState({inputValueNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputValueEmail: event.target.value})
  }


	render() {
  //  
		return <MainContainer className={'App-Container'}>
      <h1>{'Login'}</h1>
      <label>Nome:</label>
      <input onChange={this.onChangeInputNome} value = {this.state.inputValueNome}/>
      <label>E-mail:</label>
      <input onChange={this.onChangeInputEmail} value = {this.state.inputValueEmail}/>
		</MainContainer>
	}
}


export default App;