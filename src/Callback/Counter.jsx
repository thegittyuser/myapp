import { useState } from "react";
import "./counter.css";
import { useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //   const perfCount = useCallback(() => {
  //     setCount(count + 1);
  //   }, [count]);

  const perfCount = useCallback(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1);
  }, []);

  return (
    // fragments allow us to use multiple html tags inside return (jsx)
    <>
      <div className="box">
        <p>Count: {count}</p>
        <button onClick={perfCount}>Click To Increment</button>
      </div>
    </>
  );
}

export default Counter;
