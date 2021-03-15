import styled from 'styled-components'


export const DivPrincipal = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(180deg, #1b2f4a, #2a6872);
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Title = styled.p`
    font-size: 3rem;

`


export const SectionLista = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Dropdown = styled.select`
    width: 15vw;
    height: 5vh;
    /* background-image: linear-gradient(180deg, #c48d6a, #eab06a); */
    border: none;
    box-shadow: 2px 2px #000000;
    border-radius: 5px;
    margin: 25px;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BotaoInscricao = styled.div`
    margin-right: 4vw;
    width: 8vw;
    height: 5vh;
    background-image: linear-gradient(180deg, #89a680, #cffbc2);
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px #000000;
    cursor: pointer;
    transition: .4s ease;
    text-align: center;
    margin-left: 4vw;

    &:hover {
        background-image: linear-gradient(180deg, #6e8566, #60745a);
    }
`

export const StyledInput = styled.input`
    width: 15vw;
    height: 5vh;
    border: none;
    box-shadow: 2px 2px #000000;
    border-radius: 5px;
    margin: 25px;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled.button`
     width: 15vw;
    height: 5vh;
    border: none;
    box-shadow: 2px 2px #000000;
    border-radius: 5px;
    margin: 25px;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(180deg, #c48d6a, #eab06a);
`