import React from 'react'
import {StyledContainer, Texto, MainTelaPrincipal,StyledInput, StyledButton, StyledForm} from './conteudoMainStyles'
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
        <StyledForm>
        <StyledInput type='email' placeholder={"Insira seu e-mail"} />
        <StyledButton onClick={onClickFazerInscricao}>Enviar</StyledButton>
        </StyledForm>
      </MainTelaPrincipal>
    </StyledContainer>
  );
}


export default Main;