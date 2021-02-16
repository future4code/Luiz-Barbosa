import React from 'react'
import styled from 'styled-components'
import {ContainerPrincipal, PrimeiroContainer, MainDiv, SegundoContainer, TerceiroContainer, UltimoContainer} from './AppStyle.js'
import CardsArtistas from './components/mainMenu/cardsArtistas/cardsArtistas.js'
import MainMenu from './components/mainMenu/mainMenu.js'



export class App extends React.Component {
  render() {

    return (
      <ContainerPrincipal className="App">
        <PrimeiroContainer>
          <MainMenu/>
        </PrimeiroContainer>
        <MainDiv>
          <CardsArtistas/>
        </MainDiv>
        <SegundoContainer></SegundoContainer>
        <TerceiroContainer></TerceiroContainer>
        <UltimoContainer></UltimoContainer>
      </ContainerPrincipal>
    );

  }
  
}

export default App;
