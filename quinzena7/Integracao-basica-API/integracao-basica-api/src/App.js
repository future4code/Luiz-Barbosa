import React from 'react'
import TelaCadastro from './components/telaCadastro.js'
import styled from 'styled-components'

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