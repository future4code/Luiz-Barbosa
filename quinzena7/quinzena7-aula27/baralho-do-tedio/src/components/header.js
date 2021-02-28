import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div `
    display: flex;
    width: 100vw;
    height: 10vh;
    background-color: #00adb5;
    justify-content: center;
    align-items: center;
`
const Titulo = styled.h2 `
    font-weight: bold;
    font-style: italic;

`
export class HeaderPagina extends React.Component {
    render() {
        return <NavBar>
            <Titulo>Baralho do Tédio</Titulo>
        </NavBar>
    }
    
}

export default HeaderPagina;