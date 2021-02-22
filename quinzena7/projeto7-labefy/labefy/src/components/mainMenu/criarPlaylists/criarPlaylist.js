import React from 'react'
import {ContainerPrincipal} from './criarPlaylistStyle.js'
import axios from 'axios'

//COMPONENTE PARA CRIAR UMA PLAYLIST
// O usuário deve ser capaz de criar uma playlist de músicas. Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.

let onClickCriar = (props) => {
    const body = {
		name: props.
	}
    console.log(body)

// 	axios.post(`${BASE_URL}/users`, body, axiosConfig).then(() => {
// 		alert(`O usuario ${this.state.inputNome} foi criado!`)
// 		this.setState({
// 			inputNome: '', 
// 			inputEmail: ''
// 		})
// 	}).catch((erro) => {
// 		alert(erro.message)
// 	})
}

const CriarPlaylist = (props) => {
    return (
      <ContainerPrincipal>
        <h3>Crie aqui sua playlist!</h3>
        <input value={props.valorInput} onChange={props.input}/>
        <button onClick={onClickCriar}>Criar</button>
      </ContainerPrincipal>
    )
  }

export default CriarPlaylist;