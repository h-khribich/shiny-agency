import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import { Loader } from "../styles/Loader";
import { SurveyContext } from "../contexte";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const nextQuestion = (
    <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
  );
  const previousQuestion = (
    <Link to={`/survey/${questionNumberInt - 1}`}>Précédent</Link>
  );
  const results = <Link to="/results">Résultats</Link>;
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const { saveAnswers, answers } = useContext(SurveyContext);

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  useEffect(() => {
    setDataLoading(true);
    fetch(`http://localhost:8000/survey`)
      .then((response) => response.json())
      .then(({ surveyData }) => {
        setSurveyData(surveyData);
        setDataLoading(false);
      });
  }, []);

  // If first question, hide previousQuestion btn
  // If last question, display results link instead of nextQuestion btn
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumberInt}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}
      {answers && (
        <ReplyWrapper>
          <ReplyBox
            onClick={() => saveReply(true)}
            isSelected={answers[questionNumber] === true}
          >
            Oui
          </ReplyBox>
          <ReplyBox
            onClick={() => saveReply(false)}
            isSelected={answers[questionNumber] === false}
          >
            Non
          </ReplyBox>
        </ReplyWrapper>
      )}
      <LinkWrapper>
        {questionNumberInt > 1 && previousQuestion}
        {questionNumberInt === 10 ? results : nextQuestion}
      </LinkWrapper>
    </SurveyContainer>
  );
};

export default Survey;
