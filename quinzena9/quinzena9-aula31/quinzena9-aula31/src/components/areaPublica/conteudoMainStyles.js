import styled from 'styled-components'


export const StyledContainer = styled.div`
    display: flex;
    place-items: center;
    place-content: center;
    height: 86vh;
    background-image: linear-gradient(180deg, #2a6872, #5d9d83);
    `

export const Texto = styled.div`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
`

export const MainTelaPrincipal = styled.main`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 30vh;
    align-items: center;
    justify-content: center;
`

export const StyledButton = styled.button`
    width: 20vw;
    height: 5vh;
    margin-top: 2vh;
    border: none;
    box-shadow: 2px 2px #000000;
    border-radius: 5px;
    background-image: linear-gradient(180deg, #c48d6a, #eab06a);
    cursor: pointer;
`

export const StyledInput = styled.input`
    width: 20vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    background-color: #dfd8da;
`

