"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export function ThemeProvider({ children, darkMode }) {
  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
