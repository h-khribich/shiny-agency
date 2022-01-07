import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Freelances from "./pages/Freelances";
import Results from "./pages/Results";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey/:questionNumber" element={<Survey />} />
        <Route path="freelances" element={<Freelances />} />
        <Route path="results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
