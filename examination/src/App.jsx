import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? "light-theme" : "dark-theme";
  return (
    <Router>
      <section className={`app-container ${themeClass}`}>
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
