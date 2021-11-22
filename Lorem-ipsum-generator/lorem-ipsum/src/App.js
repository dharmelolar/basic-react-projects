import React, { useState } from "react";
import data from "./data";
import "./App.css";

export default function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = () => {
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="App">
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate</button>
      <div className="text-output">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}
