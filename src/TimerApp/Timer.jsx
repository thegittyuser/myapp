import { useRef, useState } from "react";
import "./timer.css";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  const startTimer = () => {};

  const stopTimer = () => {};

  const resetTimer = () => {};
  return (
    <>
      <div className="main-box">
        <h1>Timer App - React JS</h1>

        <p className="timer start">Current Timer Value Is</p>
        <p className="timer stop">Current Timer Stop Value Is</p>
        <p className="timer reset">Timer Reset</p>

        <button className="btn timer-start" onClick={startTimer}>
          Start Timer
        </button>
        <button className="btn timer-stop" onClick={stopTimer}>
          Stop Timer
        </button>
        <button className="btn timer-reset" onClick={resetTimer}>
          Reset Timer
        </button>
      </div>
    </>
  );
}

export default Timer;
