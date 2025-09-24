import { useState } from "react";
import Quiz from "./Quiz.jsx";

function App() {
  const [page, setPage] = useState(0);

  function start() {
    setPage(1);
  }

  return (
    <div>
      <header>
        <div className="blob_left" />
        <div className="blob_right" />
      </header>
      {page == 0 && (
        <main>
          <h1>Anime quiz</h1>
          <p>Let's see if you can answer 10 trivia about anime!</p>
          <button onClick={start}>Let's go!</button>
        </main>
      )}
      {page == 1 && <Quiz />}
    </div>
  );
}

export default App;
