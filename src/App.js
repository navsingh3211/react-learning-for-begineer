import { useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, SetAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    SetAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>buttion</button>
      <p>
        You have read <strong>{count}</strong> piece of advices.
      </p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
