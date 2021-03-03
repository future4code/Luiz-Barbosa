import React from 'react'
import {StyledContainer, Texto, MainTelaPrincipal,StyledInput, StyledButton} from './conteudoMainStyles'


function Main() {
  return (
    <StyledContainer>
      <MainTelaPrincipal>
        <Texto>LABE X</Texto>
        <StyledInput placeholder={"Insira seu e-mail"} />
        <StyledButton>Enviar</StyledButton>
      </MainTelaPrincipal>
    </StyledContainer>
  );
}


export default Main;