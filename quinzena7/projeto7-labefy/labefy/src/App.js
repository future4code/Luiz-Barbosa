import React from 'react'
import styled from 'styled-components'
import {ContainerPrincipal, PrimeiroContainer, MainDiv, SegundoContainer, TerceiroContainer, UltimoContainer} from './AppStyle.js'
import CardsArtistas from './components/mainMenu/cardsArtistas/cardsArtistas.js'
import MainMenu from './components/mainMenu/mainMenu.js'
import CriarPlaylist from './components/mainMenu/criarPlaylists/criarPlaylist.js'



export class App extends React.Component {
  state = {
    criarPlaylist: false,
    paginaPrincipal: false,
    playlists: false,
    novaPlaylistNome: '',
    arrayDePlaylists: []
    
  }


  mudaParaPaginaPrincipal = () => {
    let novaPagina = this.state.paginaPrincipal
    novaPagina = !novaPagina
    this.setState({paginaPrincipal: novaPagina})
    console.log("funfou pra home")
    
  }

  mudaParaPlaylists = () => {
    let listaPlaylists = this.state.playlists
    listaPlaylists = !listaPlaylists
    this.setState({playlists: listaPlaylists})
    console.log("funfou pra lista")
  }

  mudaParaCriarPlaylists = () => {
    let novaPlaylist = this.state.criarPlaylist
    novaPlaylist = !novaPlaylist
    this.setState({criarPlaylist: novaPlaylist})
    console.log("funfou pra criar")
  }

  onChangeInput = (event) => {
    this.setState({novaPlaylistNome: event.target.value})
  }

  onClickCriar = () => {
    console.log('funcionou!')
  }



  render() {

    console.log(this.state.novaPlaylistNome)
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
          {this.state.criarPlaylist ? <CriarPlaylist valorInput={this.state.novaPlaylistNome} input={this.onChangeInput} /> : ''}
        </MainDiv>
        
        <SegundoContainer></SegundoContainer>
        <TerceiroContainer></TerceiroContainer>
        <UltimoContainer></UltimoContainer>
      </ContainerPrincipal>
    );

  }
  
}

export default App;
