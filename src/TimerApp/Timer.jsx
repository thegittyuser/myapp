import { useRef, useState } from "react";
import "./timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    // if (timerRef.current) {
    //   clearInterval(timerRef.current);
    //   timerRef.current = null;
    // }

    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };
  return (
    <>
      <div className="main-box">
        <h1>Timer App - React JS</h1>
        <p>Current Seconds "{seconds}"</p>
        <p>Stop at Seconds "{seconds}"</p>
        <p>Timer Reset Seconds "{seconds}"</p>
        <br />
        <button onClick={startTimer}>Click to Start Timer</button>
        <button onClick={stopTimer}>Click to Stop Timer</button>
        <button onClick={resetTimer}>Click to Reset Timer</button>
      </div>
    </>
  );
}
export default Timer;

// import { useRef, useState } from "react";
// import "./timer.css";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [stoppedAt, setStoppedAt] = useState(null);
//   const [resetAt, setResetAt] = useState(null);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     if (timerRef.current) return; // prevent multiple intervals
//     timerRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//       setStoppedAt(seconds); // store value at which timer stopped
//     }
//   };

//   const resetTimer = () => {
//     setResetAt(seconds); // store value before resetting
//     stopTimer();
//     setSeconds(0);
//   };

//   return (
//     <div className="main-box">
//       <h1>Timer App - React JS</h1>

//       <p>Current Seconds: {seconds}</p>

//       {stoppedAt !== null && <p>Stopped at Seconds: {stoppedAt}</p>}

//       {resetAt !== null && <p>Timer Reset From Seconds: {resetAt}</p>}

//       <br />
//       <button onClick={startTimer}>Click to Start Timer</button>
//       <button onClick={stopTimer}>Click to Stop Timer</button>
//       <button onClick={resetTimer}>Click to Reset Timer</button>
//     </div>
//   );
// }

// export default Timer;
