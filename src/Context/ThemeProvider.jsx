import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, handleTheme: handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
