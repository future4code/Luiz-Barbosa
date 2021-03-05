import React from 'react'
import {StyledContainer, Texto, MainTelaPrincipal,StyledInput, StyledButton} from './conteudoMainStyles'
import {useHistory} from 'react-router-dom'


const Main = () => {
  const history = useHistory()

    const onClickFazerInscricao = () => {
    history.push("/inscricao")
    }

  
  return (
    <StyledContainer>
      <MainTelaPrincipal>
        <Texto>LABE X</Texto>
        <StyledInput placeholder={"Insira seu e-mail"} />
        <StyledButton onClick={onClickFazerInscricao}>Enviar</StyledButton>
      </MainTelaPrincipal>
    </StyledContainer>
  );
}


export default Main;