import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("## markdown editor");
  return (
    <div className="body">
      <div className="main">
        <main>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </main>
        <main class="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </main>
      </div>
    </div>
  );
};

export default App;
