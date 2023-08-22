import { useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, SetAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
