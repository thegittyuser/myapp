import { useContext } from "react";
import { usernameContext } from "./Component1.jsx";
import "./name.css";

function Component3() {
  const username = useContext(usernameContext);
  return (
    <>
      <div className="box-1">
        <h3>Component 3</h3>
        <p>Bye, {username}</p>
      </div>
    </>
  );
}
export default Component3;
