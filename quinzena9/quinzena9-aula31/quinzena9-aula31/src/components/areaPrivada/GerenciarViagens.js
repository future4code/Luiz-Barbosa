import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {BASE_URL} from '../../requisicoes/requisicoes'

const GerenciarViagens = () => {
    const [viagens, setViagens] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`).then((response) => {
            console.log(response)
            setViagens(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useProtectedPage()
    return(
        <div>

        </div>
    )

}

export default GerenciarViagens;