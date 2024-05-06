import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? "light-theme" : "dark-theme";

  return (
    <aside className={`sidebar ${themeClass}`}>
      <div className="sidebar-container">
        <h2>Sofia Rosborg</h2>
        <span className={`sidebar-span ${themeClass}`}></span>
        <ul>
          <li
            className={`menu-item ${
              location.pathname === "/" ? "active" : ""
            } ${themeClass}`}
          >
            <Link to="/" className={`custom-link ${themeClass}`}>
              Om mig
            </Link>
          </li>
          <li
            className={`menu-item ${
              location.pathname === "/projects" ? "active" : ""
            } ${themeClass}`}
          >
            <Link to="/projects" className={`custom-link ${themeClass}`}>
              Projekt
            </Link>
          </li>
          <li
            className={`menu-item ${
              location.pathname === "/contact" ? "active" : ""
            } ${themeClass}`}
          >
            <Link to="/contact" className={`custom-link ${themeClass}`}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </aside>
  );
}
