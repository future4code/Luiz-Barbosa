import React from 'react'
import {StyledHeader, DivLogo, DivNavBar, NavBar, Lista, StyledButton} from './headerStyles'
import { useHistory  } from 'react-router-dom'


const Header = () => {
  const history = useHistory()

  const onClickLogin = () => {
    history.push("/login")
  }

  return (
    <div>
      <StyledHeader>
        <DivLogo>Logo</DivLogo>
        <DivNavBar>
          <NavBar>
              <Lista>Home</Lista>
              <Lista>Viagens</Lista>
              <Lista>Formulário</Lista>
          </NavBar>
          <StyledButton onClick={onClickLogin}>Login</StyledButton>
          <StyledButton>Register</StyledButton>
        </DivNavBar>
      </StyledHeader>
    </div>
  );
}


export default Header;


