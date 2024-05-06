import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      className={`theme-toggle-button ${
        theme === "light" ? "light-theme" : "dark-theme"
      }`}
      onClick={() => dispatch(toggleTheme())}
    >
      {" "}
      {theme === "light" ? "Dark" : "Light"}{" "}
    </button>
  );
}
