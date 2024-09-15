import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeProvider";
export default function Navbar() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center justify-center w-full gap-x-2 ${
        theme === "dark" ? "bg-dark" : "bg-light"
      } `}
    >
      <h1 className={`text-center font-bold text-2xl capitalize font-boldpx-3 py-3 ${theme === "dark" ? "text-light" : "text-dark"}`}>
        Top courses
      </h1>
      {theme === "light" ? (
        <FaMoon onClick={handleTheme} fontSize={30} color="black" />
      ) : (
        <FaSun onClick={handleTheme} fontSize={30} color="white" />
      )}
    </div>
  );
}
