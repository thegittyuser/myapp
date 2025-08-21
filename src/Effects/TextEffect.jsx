import { useEffect } from "react";
import "./texteffect.css";

function TextEffect() {
  useEffect(() => {
    console.log("Your Data is rendered successfully!");
  });
  return (
    <>
      <div className="box">
        <h2>This is Effect Hook</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          harum iusto minus, quam repellat a quasi est, vero nesciunt
          reprehenderit blanditiis repudiandae rem esse tempora totam sequi sunt
          pariatur dolores?
        </p>
        <h1>THIS IS EFFECT</h1>
      </div>
    </>
  );
}
export default TextEffect;
