import React from 'react'
import {StyledHeader, DivLogo, DivNavBar, NavBar, Lista, StyledButton} from './headerStyles'



function Header() {
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
          <StyledButton>Login</StyledButton>
          <StyledButton>Register</StyledButton>
        </DivNavBar>
      </StyledHeader>
    </div>
  );
}


export default Header;


