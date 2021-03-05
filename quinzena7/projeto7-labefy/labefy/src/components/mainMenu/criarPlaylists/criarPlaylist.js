import React from 'react'
import {ContainerPrincipal} from './criarPlaylistStyle.js'
// import axios from 'axios'
// import BASE_URL from '../../../requisicoes/requisicoes'
// import axiosConfig from '../../../requisicoes/requisicoes'
//COMPONENTE PARA CRIAR UMA PLAYLIST
// O usuário deve ser capaz de criar uma playlist de músicas. Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.

// let onClickCriar = (props) => {
//     const body = {
// 		name: props
// 	}

//   // console.log(props)
// 	axios.post(`${BASE_URL}/playlists`, axiosConfig, body).then(() => {
// 		alert(`A Playlist ${body} foi criado!`)
// 	}).catch((erro) => {
// 		alert(erro.message)
// 	})
// }


const CriarPlaylist = (props) => {
  
    return (
      <ContainerPrincipal>
        <h3>Crie aqui sua playlist!</h3>
        <input value={props.valorInput} onChange={props.input}/>
        <button onClick={props.onClickCriar}>Criar</button>
      </ContainerPrincipal>
    )
  }

export default CriarPlaylist;