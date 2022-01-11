import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Freelances from "./pages/Freelances";
import Results from "./pages/Results";
import { ThemeProvider, SurveyProvider } from "./contexte/index";
import GlobalStyle from "./styles/GlobalStyle";
import DarkModeBtn from "./components/DarkModeBtn.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <DarkModeBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="survey/:questionNumber" element={<Survey />} />
            <Route path="freelances" element={<Freelances />} />
            <Route path="results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
