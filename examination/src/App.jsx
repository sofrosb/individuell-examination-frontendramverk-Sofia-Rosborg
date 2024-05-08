import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  // useSelector används för att hämta data från Redux, i detta fall theme. Det möjliggör dynamisk uppdatering av komponenter baserat på Redux-storens tillstånd.
  // Den är återkommande i flera komponenter och används för att växla mellan dark/light mode.
  // Det görs genom att lägga till en CSS-klass baserat på det aktuella temat med en ternary operator:
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? "light-theme" : "dark-theme";
  return (
    <Router>
      <section className={`${themeClass}`}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </section>
    </Router>
  );
}

export default App;
