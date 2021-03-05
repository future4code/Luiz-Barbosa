import React from 'react'
import {StyledHeader, DivLogo, DivNavBar, NavBar, Lista, StyledButton} from './headerStyles'



const Header = (props) => {
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
          <StyledButton onClick={props.onClickLogin}>Login</StyledButton>
          <StyledButton>Register</StyledButton>
        </DivNavBar>
      </StyledHeader>
    </div>
  );
}


export default Header;


