import styled from "styled-components";
import colors from "../styles/colors";
import { Link } from "react-router-dom";
import HomeIllustration from "../assets/home-illustration.svg";
import { ThemeContext } from "../contexte";
import { useContext } from "react";

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomerContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  ${(props) =>
    props.theme === "dark"
      ? `background-color: ${colors.backgroundDark};`
      : `background-color: ${colors.backgroundLight};`}
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  ${(props) => (props.theme === "dark" ? "color: white" : "color: #2F2E41")}
`;

const Illustration = styled.img`
  flex: 1;
`;

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <HomeWrapper>
      <HomerContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  );
}

export default Home;
