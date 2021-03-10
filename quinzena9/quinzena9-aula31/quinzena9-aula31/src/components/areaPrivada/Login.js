import React from 'react'
import {DivPrincipal, SectionLogin, TextoLogin, InputLogin, BotaoLogin} from './LoginStyles'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
import { BASE_URL } from '../../requisicoes/requisicoes'

const LoginScreen = () => {
const history = useHistory()
const [inputEmail, setInputEmail] = useState('')
const [inputSenha, setInputSenha] = useState('')


  const onChangeEmail = (event) => {
    setInputEmail(event.target.value)
  }
  const onChangeSenha = (event) => {
    setInputSenha(event.target.value)
  }


  const onClickLogar = () => {
    const body = {
      email: inputEmail,
      password: inputSenha
    }

    axios.post(`${BASE_URL}/login`, body).then((response) => {
      console.log(response)
      history.push("/areaPrivada")
      window.localStorage.setItem("token", response.data.token);
    }).catch((error) => {
      console.log(error)
    })


  }
    return(
        <DivPrincipal>
            <SectionLogin>
                <div>
                   <TextoLogin>LABE X</TextoLogin> 
                </div>
                <p><InputLogin onChange={onChangeEmail} value={inputEmail} placeholder='Insira seu login' type='text'/></p>
                <p><InputLogin onChange={onChangeSenha} value={inputSenha} placeholder='Insira sua senha' type='password'/></p>
                <BotaoLogin onClick={onClickLogar}>Entrar</BotaoLogin>
            </SectionLogin>
        </DivPrincipal>
    )
}

export default LoginScreen