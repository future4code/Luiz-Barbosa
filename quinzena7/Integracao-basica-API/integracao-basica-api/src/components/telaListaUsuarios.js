import axios from 'axios'
import React from 'react'
import { axiosConfig, BASE_URL } from '../constants/requisicoes'
import {ItemListaUsuarios} from './styles/listaUsuariosStyled'

const usuariosMockados = [{ 
	id: "1",
	name: "Bob"
}, 
{
	id: "2",
	name: "Marley"

}]

export class TelaListaUsuarios extends React.Component {
	state = {
		usuarios: []
	}

componentDidMount() {
	this.pegarUsuarios()
}

pegarUsuarios = () => {
	axios.get(`${BASE_URL}/users`, axiosConfig).then((resposta) => {
		this.setState({usuarios: resposta.data})
	}).catch((erro) => {
		alert(erro.message)
	})
}

	deletarUsuario = (id) => {
		axios.delete(`${BASE_URL}/users/${id}`, axiosConfig)
		.then((resposta) => {
			alert("Usuario deletado com sucesso")
			this.pegarUsuarios()
		}).catch((erro) => {
			alert(erro.message)
		})
	}
	render() {
		const listaUsuarios = this.state.usuarios.map((item) => {
			return (
				<ItemListaUsuarios>
					{item.name}
					<button onClick={() => {this.deletarUsuario(item.id)}}>X</button>
				</ItemListaUsuarios>
			)
		})
  //  Tela de cadastro
		return <div className={'App-Container'}>
      {listaUsuarios}
		</div>
	}
}

export default TelaListaUsuarios;