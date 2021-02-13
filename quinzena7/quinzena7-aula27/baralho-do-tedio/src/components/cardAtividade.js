import React from 'react'
import styled from 'styled-components'

const CardInfo = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    width: 150px;
    height: 150px;
    background-color: #222831;
    margin: 20px;
    color: whitesmoke;
    border-radius: 15px;
    padding: 5px;
`

export class CardAtividade extends React.Component {

    render() {
        return <CardInfo>
            {this.props.atividade}
        </CardInfo>
    }
}

export default CardAtividade;