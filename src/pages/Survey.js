import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

  // If first question, hide previousQuestion btn
  // If last question, display results link instead of nextQuestion btn
  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumberInt}</h2>
      <nav>
        {questionNumberInt > 1 && previousQuestion}
        {questionNumberInt === 10 ? results : nextQuestion}
      </nav>
    </div>
  );
};

export default Survey;
