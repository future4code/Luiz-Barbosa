import styled from 'styled-components'

export const DivPrincipal = styled.div`
    background-image: linear-gradient(180deg, #1b2f4a, #2a6872);
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

export const SectionLogin = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 10vh;
    border-radius: 5px;
    box-shadow: 5px 5px #000000;
`

export const TextoLogin = styled.strong`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
`

export const InputLogin = styled.input`
    width: 15vw;
    height: 5vh;
    border: none;
    background-color: #dfd8da;
`

export const BotaoLogin = styled.button`
    width: 15vw;
    height: 5vh;
    background-image: linear-gradient(180deg, #c48d6a, #eab06a);
    cursor: pointer;
    border: none;
    box-shadow: 2px 2px #000000;
    border-radius: 5px;
`