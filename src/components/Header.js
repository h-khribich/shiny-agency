import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import DarkLogo from "../assets/dark-logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  margin: 0 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  transition: 300ms;
  &:hover {
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLogo = styled.img`
  height: 70px;
`;

const Header = () => {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="freelances">Profils</StyledLink>
        <StyledLink to="survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  );
};

export default Header;
