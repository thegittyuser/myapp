import "./name.css";

import { usernameContext } from "./Component1.jsx";
import { useContext } from "react";

function Component2() {
const username = useContext();
  return (
    <>
      <div className="box-1">
        <b>Component 2</b>
        <br />
        Hello Again, {/*username*/}
      </div>
    </>
  );
}

export default Component2;
