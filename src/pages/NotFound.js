import React, { useContext } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import pageNotFoundLogo from "../assets/page_not_found-logo.svg";
import { ThemeContext } from "../contexte";

const NotFoundWrapper = styled.div`
  margin: 30px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  ${(props) =>
    props.theme === "dark"
      ? `background-color: ${colors.backgroundDark};`
      : `background-color: ${colors.backgroundLight};`}
`;

const NotFoundTitle = styled.h1`
  font-weight: 300;
  ${(props) => (props.theme === "dark" ? "color: white" : "color: #2F2E41")}
`;

const NotFoundSubtitle = styled.h2`
  font-weight: 300;
  ${(props) => (props.theme === "dark" ? "color: white" : "color: #2F2E41")}
`;

const Illustration = styled.img`
  max-width: 500px;
  margin: 20px 0;
`;
const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NotFoundWrapper theme={theme}>
      <NotFoundTitle theme={theme}>Oups...</NotFoundTitle>
      <Illustration src={pageNotFoundLogo} />
      <NotFoundSubtitle theme={theme}>
        Il semblerait que la page que vous cherchez n’existe pas
      </NotFoundSubtitle>
    </NotFoundWrapper>
  );
};

export default NotFound;
