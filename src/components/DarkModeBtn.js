import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexte";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  height: 0;
`;

const NightModeButton = styled.button`
  font-size: 14px;
  position: relative;
  right: 27px;
  top: -27px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${(props) => (props.theme === "dark" ? "color: white" : "color: #2F2E41")}
`;

const Footer = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <NightModeButton theme={theme} onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "🌙" : "☀️"}
      </NightModeButton>
    </FooterContainer>
  );
};

export default Footer;
