import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import DarkLogo from "../assets/dark-logo.svg";
import LightLogo from "../assets/light-logo.svg";
import { ThemeContext } from "../contexte";

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
    !props.$isFullLink && props.theme === "dark" ? "color: white" : null}
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
  const { theme } = useContext(ThemeContext);
  return (
    <NavContainer>
      <Link to="/">
        {theme === "dark" ? (
          <HomeLogo src={LightLogo} />
        ) : (
          <HomeLogo src={DarkLogo} />
        )}
      </Link>
      <div>
        <StyledLink theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink theme={theme} to="freelances">
          Profils
        </StyledLink>
        <StyledLink to="survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  );
};

export default Header;
