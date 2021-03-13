import React, { useEffect } from 'react'
import {DivPrincipal, BotaoAreaPrivada} from './AreaPrivadaStyles'
import {useHistory} from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'


const AreaPrivada = () => {
    const history = useHistory()

    const onClickInscritos = () => {
        history.replace("/inscritos")
    }
    const onClickViagens = () => {
        history.replace("/admViagens")
    }
    
    useProtectedPage()
    
    return(
        <DivPrincipal>
           <BotaoAreaPrivada onClick={onClickInscritos}>Inscritos</BotaoAreaPrivada>
           <BotaoAreaPrivada onClick={onClickViagens}>Administrar Viagens</BotaoAreaPrivada>
        </DivPrincipal>
    )

}

export default AreaPrivada;