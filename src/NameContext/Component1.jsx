import Component2 from "./Component2.jsx";
import { createContext } from "react";
export const usernameContext = createContext();
import "./name.css";

function Component1() {
  const username = "Talha";
  return (
    <>
      <div className="box-1">
        <b>Component 1</b>
        <br />
        Hello, {username}
        <usernameContext.Provider value={username}>
        <Component2 />
        </usernameContext.Provider>
      </div>
    </>
  );
}

export default Component1;
