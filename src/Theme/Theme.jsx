import { createContext, useContext } from "react";
export const ThemeContext = createContext();

import "./theme.css";

function Theme() {
  const darkContext = useContext(ThemeContext);
  return (
    <>
      <div className="theme-box-dark">
        <h3>ThemeContext </h3>
        <button /*onClick={toggleTheme}*/>Toggle Theme</button>
      </div>
    </>
  );
}

export default Theme;
