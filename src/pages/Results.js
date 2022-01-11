import React from "react";
import { useContext } from "react";
import { SurveyContext } from "../contexte";

const Results = () => {
  const { answers } = useContext(SurveyContext);
  console.log(answers);
  return (
    <div>
      <h1>Résultats</h1>
    </div>
  );
};

export default Results;
