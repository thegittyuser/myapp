import { useRef } from "react";
import "./formref.css";

function FormRef() {
  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="main-box">
        <h1>useRef Using InputRef</h1>

        <input type="text" ref={inputRef} placeholder="Enter Value" />
        <button onClick={inputFocus}>Click To Focus</button>
      </div>
    </>
  );
}

export default FormRef;
