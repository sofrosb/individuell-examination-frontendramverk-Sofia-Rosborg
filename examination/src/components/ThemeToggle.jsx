import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

// Funktion som hanterar temaväxlingen:
export default function ThemeToggle() {
  // Hämtar dispatch-funktionen från Redux för att skicka åtgärder:
  const dispatch = useDispatch();
  // Hämtar aktuellt tema från Redux store:
  const theme = useSelector((state) => state.theme.theme);

  // Renderar en knapp som tillåter användaren att byta tema genom att klicka på den,
  // toggleTheme anropas när knappen klickas på:
  return (
    <button
      className={`theme-toggle-button ${
        theme === "light" ? "light-theme" : "dark-theme"
      }`}
      onClick={() => dispatch(toggleTheme())}
    >
      {/* Visar text beroende på aktuellt tema, är temat ljust visar den texten "DARK" och tvärtom, vid mörkt visar den texten "LIGHT". */}
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
