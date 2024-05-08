import { createSlice } from "@reduxjs/toolkit";

// Skapar ett initalt tillstånd för temat:
const initialState = {
  theme: "light", // Förinställt på ljust tema.
};

const themeSlice = createSlice({
  name: "theme",
  initialState, // Använder det initiala tillståndet.
  // Definierar en reducerfunktion för att växla tema:
  reducers: {
    toggleTheme: (state) => {
      // Om det aktuella temat är ljust, byt till mörkt läge och vice versa:
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
