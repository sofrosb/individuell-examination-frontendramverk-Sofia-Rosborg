import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <h2>Sofia Rosborg</h2>
        <span></span>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Om mig</Link>
          </li>
          <li className={location.pathname === "/projects" ? "active" : ""}>
            <Link to="/projects">Projekt</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </aside>
  );
}
