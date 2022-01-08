import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import pageNotFoundLogo from "../assets/page_not_found-logo.svg";

const NotFoundWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`;

const NotFoundTitle = styled.h1`
  font-weight: 300;
`;

const NotFoundSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

const Illustration = styled.img`
  max-width: 500px;
  margin: 20px 0;
`;
const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Oups...</NotFoundTitle>
      <Illustration src={pageNotFoundLogo} />
      <NotFoundSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </NotFoundSubtitle>
    </NotFoundWrapper>
  );
};

export default NotFound;
