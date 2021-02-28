import React from 'react'
import styled from 'styled-components'
import CardAtividade from './cardAtividade.js'
import axios from 'axios'
import { BASE_URL } from '../constants/requisicoes.js'

const ContainerPrincipal = styled.div`
    background-color: #393e46;
    height: 90vh;
    display: flex;
    place-items: center;
    place-content: center;

`

const SelectTag = styled.select`
    padding: 10px;
    border-radius: 5px;
    background-color: #aaaaaa;
    width: 200px;
`


export class EscolherAtividade extends React.Component {
    state = {
        atividadeEscolhida: '',
        atividadesDisponiveis: []
    }

    onChangeDropdown = (event) => {
        this.setState({atividadeEscolhida: event.target.value})
        
    }
    onClickPesquisa =() => {
        axios.get(`${BASE_URL}?type=${this.state.atividadeEscolhida}`)
        .then((response) => {
            this.setState({atividadesDisponiveis: response.data.activity})
            console.log(this.state.atividadesDisponiveis)
        })
        .catch((erro) => {
            alert(erro.message)
        })
    }

    render() {
        return <ContainerPrincipal>
            <SelectTag  value={this.state.atividadeEscolhida} onChange={this.onChangeDropdown}>
                <option></option>
                <option>recreational</option>
                <option>education</option>
                <option>social</option>
                <option>relaxation</option>
                <option>cooking</option>
                <option>diy</option>
                <option>charity</option>
                <option>music</option>
                <option>busywork</option>
            </SelectTag>
            <CardAtividade atividade={this.state.atividadesDisponiveis}>
                
            </CardAtividade>
            <button onClick={this.onClickPesquisa}>Pesquisar</button>
        </ContainerPrincipal>
    }
    
}

export default EscolherAtividade;