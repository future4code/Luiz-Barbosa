import styled from 'styled-components'



export const StyledHeader = styled.header`
    background-image: linear-gradient(180deg, #1b2f4a, #2a6872);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DivLogo = styled.div`
    width: 30vw;
    height: 5vh;
    text-align: center;
    background-color: #eab06a;
    border-radius: 5px;
`

export const DivNavBar = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
`

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5vh;
`

export const Lista = styled.li`
    text-decoration: none;
    list-style: none;
    margin-right: 4vw;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
`

export const StyledButton = styled.button`
    margin-right: 4vw;
    width: 6vw;
    height: 5vh;
    background-image: linear-gradient(180deg, #c48d6a, #eab06a);
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px #000000;
    cursor: pointer;
    transition: .4s ease;

    &:hover {
        height: 5.5vh;
        width: 6.5vw;
    }
`