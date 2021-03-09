import React from 'react'
import {DivPrincipal, SectionLogin, TextoLogin, InputLogin, BotaoLogin} from './LoginStyles'
import {useHistory} from 'react-router-dom'

const LoginScreen = () => {
const history = useHistory()

  const onClickLogar = () => {
    history.push("/areaPrivada")
  }
    return(
        <DivPrincipal>
            <SectionLogin>
                <div>
                   <TextoLogin>LABE X</TextoLogin> 
                </div>
                <p><InputLogin placeholder='Insira seu login' type='text'/></p>
                <p><InputLogin placeholder='Insira sua senha' type='password'/></p>
                <BotaoLogin onClick={onClickLogar}>Entrar</BotaoLogin>
            </SectionLogin>
        </DivPrincipal>
    )
}

export default LoginScreen