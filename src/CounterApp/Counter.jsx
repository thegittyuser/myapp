import { useState } from "react";
import "./css/counter.css";

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="counter-box">
        <h1>Counter App</h1>
        <br />
        <h3>Counter value is {value}</h3>
        <br />
        <div className="buttons">
          <button onClick={() => setValue(value + 1)}>
            Click To Increment
          </button>
          <button onClick={() => setValue(value - 1)}>
            Click To Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
