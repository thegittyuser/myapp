import { createContext, useState } from "react";
export const ThemeContext = createContext();
import "./theme.css";

function Theme() {
  const [light, setLight] = useState(true);

  const toggleTheme = () => {
    setLight((prev) => !prev);
  };

  return (
    <>
      <ThemeContext.Provider value={{ light, toggleTheme }}>
        <div className={light ? "theme-light" : "theme-dark"}>
          <h3>Theme Context</h3>
          <button onClick={toggleTheme}>
            Switch To {light ? "Light" : "Dark"} Mode
          </button>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default Theme;
