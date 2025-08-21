import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();
import "./theme.css";

function Theme() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <>
      <ThemeContext.Provider value={{ dark, toggleTheme }}>
        <div className={dark ? "theme-dark" : "theme-light"}>
          <h3>Theme Context</h3>
          <button onClick={toggleTheme}>
            Switch To {dark ? "Dark" : "Light"} Mode
          </button>
        </div>
      </ThemeContext.Provider>
    </>
  );
}
export default Theme;
