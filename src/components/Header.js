import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="survey/1">Questionnaire</Link>
        <Link to="freelances">Freelances</Link>
      </nav>
    </div>
  );
};

export default Header;
