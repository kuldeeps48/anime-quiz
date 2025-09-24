import { useEffect, useState } from "react";
import he from "he";

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);

  if (questions.length === 0) {
    setQuestions(testData());
  }

  //   useEffect(() => {
  //     fetch("https://opentdb.com/api.php?amount=10&category=31&difficulty=medium")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setQuestions(data.results);
  //       });
  //   }, []);

  let displayQuestions = null;
  if (questions.length > 0) {
    displayQuestions = questions.map((q) => {
      const options = [...q.incorrect_answers, q.correct_answer];
      return (
        <div className="question-section" key={he.decode(q.question)}>
          <h2 className="question">{he.decode(q.question)}</h2>
          <div className="options">
            {options.map((option) => (
              <button key={he.decode(option)}>{he.decode(option)}</button>
            ))}
          </div>
          <hr />
        </div>
      );
    });
  }

  return (
    <>
      <section className="quiz-section">{displayQuestions}</section>
      <div className="results-section">
        <h2>You scored 3/5 correct answers</h2>
        <button>Check answers</button>
      </div>
    </>
  );
}

function testData() {
  return [
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "In &quot;Black Lagoon&quot;, what colour is Rock&#039;s tie?",
      correct_answer: "Teal",
      incorrect_answers: ["Crimson", "Dark Brown", "Black"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "Krusty is the guild master of which guild in &quot;Log Horizon&quot;?",
      correct_answer: "D. D. D",
      incorrect_answers: [
        "Silver Sword",
        "West Wind Brigade",
        "Oceanic Systems (Marine Agency)",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "What was studio Trigger&#039;s first original long-form animated series for television?",
      correct_answer: "Kill la Kill",
      incorrect_answers: ["Kiznaiver", "Inferno Cop", "Gurren Lagann"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "My Hero Academia&#039;s main character Midoriya goes by what superhero name?",
      correct_answer: "Deku",
      incorrect_answers: ["All Might", "Saitama", "Kona"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In &quot;Highschool DxD&quot;, Koneko Toujou is from what race?",
      correct_answer: "Nekomata",
      incorrect_answers: ["Kitsune", "Human", "Kappa"],
    },
  ];
}
