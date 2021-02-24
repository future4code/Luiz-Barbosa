import React from 'react'
import styled from 'styled-components'
import {ContainerPrincipal, PrimeiroContainer, MainDiv, SegundoContainer, TerceiroContainer, UltimoContainer} from './AppStyle.js'
import CardsArtistas from './components/mainMenu/cardsArtistas/cardsArtistas.js'
import MainMenu from './components/mainMenu/mainMenu.js'
import CriarPlaylist from './components/mainMenu/criarPlaylists/criarPlaylist.js'
import {BASE_URL} from './requisicoes/requisicoes'
import {axiosConfig} from './requisicoes/requisicoes'
import axios from 'axios'
import BuscarPlaylists from  './components/mainMenu/playlists/playlists'



export class App extends React.Component {
  state = {
    criarPlaylist: false,
    paginaPrincipal: false,
    playlists: false,
    novaPlaylistNome: '',
    arrayDePlaylists: [],
    buscaDePlaylists: ''
    
  }

//=================== TROCA DE PAGINAS PARA RENDERIZAÇÃO CONDICIONAL ===============================================
  mudaParaPaginaPrincipal = () => {
    let novaPagina = this.state.paginaPrincipal
    novaPagina = !novaPagina
    this.setState({paginaPrincipal: novaPagina})
    
  }

  mudaParaPlaylists = () => {
    let listaPlaylists = this.state.playlists
    listaPlaylists = !listaPlaylists
    this.setState({playlists: listaPlaylists})
  }

  mudaParaCriarPlaylists = () => {
    let novaPlaylist = this.state.criarPlaylist
    novaPlaylist = !novaPlaylist
    this.setState({criarPlaylist: novaPlaylist})
  }

  //===============ONCHANGES INPUTS CONTROLADOS====================================================

  onChangeInput = (event) => {
    this.setState({novaPlaylistNome: event.target.value})
  }

  // onChangeBusca = (event) => {
  //   this.setState({buscaDePlaylists: event.target.value})
  // }

  //=====================REQUISIÇÕES DE API =======================================================

  onClickCriar = () => {
    const body = {
		name: this.state.novaPlaylistNome
	}

	axios.post(`${BASE_URL}/playlists`, body, axiosConfig).then(() => {
		alert(`A Playlist ${body.name} foi criado!`)
	}).catch((erro) => {
		alert(erro.message)
	})

  this.setState({novaPlaylistNome: ''})
}

onClickBuscar = () => {
axios.get(`${BASE_URL}/playlists`, axiosConfig).then((response) => {
  console.log(response)
  this.setState({arrayDePlaylists: response.data.result.list})
}).catch((erro) => {
  alert(erro.message)
})

}

arrayDePlaylists = this.state.arrayDePlaylists.map((item) => {
  return <li>{item}</li>
})

  render() {
    return (
      <ContainerPrincipal className="App">
        <PrimeiroContainer>
          <MainMenu 
          mudaPagina={this.mudaParaPaginaPrincipal}
          mudaPraSegundaPagina={this.mudaParaPlaylists}
          mudaPraTerceiraPagina={this.mudaParaCriarPlaylists}
           />
        </PrimeiroContainer>

        <MainDiv>
          <CardsArtistas/>
          {this.state.criarPlaylist ? <CriarPlaylist onClickCriar={this.onClickCriar} valorInput={this.state.novaPlaylistNome} input={this.onChangeInput} /> : ''}
          {this.state.playlists ? <BuscarPlaylists onClickBuscar={this.onClickBuscar} /> : ''}
          {this.arrayDePlaylists}
        </MainDiv>
        
        <SegundoContainer></SegundoContainer>
        <TerceiroContainer></TerceiroContainer>
        <UltimoContainer></UltimoContainer>
      </ContainerPrincipal>
    );

  }
  
}

export default App;
