import React from 'react'
import styled from 'styled-components'
import {ButtonContainer} from './styles/telaCadastroSStyle'
import {DivPrincipal} from './styles/telaCadastroSStyle'
import {BASE_URL, axiosConfig} from '../constants/requisicoes'
import axios from 'axios'
 
export class TelaCadastro extends React.Component {
	state = {
		inputNome: '', 
		inputEmail: ''
	}

criarUsuario = () => {
	const body = {
		name: this.state.inputNome,
		email: this.state.inputEmail
	}
	axios.post(`${BASE_URL}/users`, body, axiosConfig).then(() => {
		alert(`O usuario ${this.state.inputNome} foi criado!`)
		this.setState({
			inputNome: '', 
			inputEmail: ''
		})
	}).catch((erro) => {
		alert(erro.message)
	})
	
}

mudarNome = (evento) => {
	this.setState({inputNome: evento.target.value})
}

mudarEmail = (evento) => {
	this.setState({inputEmail: evento.target.value})
}


	render() {
  //  Tela de cadastro
		return <DivPrincipal className={'App-Container'}>
	  <div><h1>{'Login'}</h1></div>
	  <div><label>Nome:</label></div>
	  <div><input value={this.state.inputNome} onChange = {this.mudarNome}/></div>
	  <div><label>E-mail:</label></div>
	  <div><input value={this.state.inputEmail} onChange = {this.mudarEmail}/></div>
	 <ButtonContainer><button onClick={this.criarUsuario}>Criar Usuário</button></ButtonContainer> 
		</DivPrincipal>
	}
}


export default TelaCadastro;