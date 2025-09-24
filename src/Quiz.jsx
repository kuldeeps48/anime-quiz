import { useEffect, useState } from "react";
import he from "he";
import { shuffle } from "./utils";
import { clsx } from "clsx";
import Confetti from "react-confetti";
import { BlinkBlur } from "react-loading-indicators";

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [submit, setSubmit] = useState(false);

  const allQuestionsAnswered =
    (questions.length > 0 && questions?.every((q) => q.selected_answer)) ||
    false;
  const score = submit
    ? questions.filter((q) => q.selected_answer === q.correct_answer).length
    : 0;

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://opentdb.com/api.php?amount=10&category=31&difficulty=medium"
      )
        .then((res) => res.json())
        .then((data) => {
          setQuestions(
            data.results.slice(0, 5).map((q) => ({
              question: he.decode(q.question),
              correct_answer: he.decode(q.correct_answer),
              incorrect_answers: shuffle(
                Array.from(new Set([...q.incorrect_answers, q.correct_answer]))
              ).map((ans) => he.decode(ans)),
              selected_answer: null,
            }))
          );
        })
        .catch((error) => {
          console.error("Error fetching quiz data:", error);
          props.restart();
        });
    }, 1000); // Simulate loading delay
  }, []);

  function onOptionSelect(question, value) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((q) =>
        q.question === question ? { ...q, selected_answer: value } : q
      );
    });
  }

  function onSubmit() {
    if (!allQuestionsAnswered) return;
    if (submit) {
      props.restart();
      return;
    }

    setSubmit(true);
  }

  let displayQuestions = null;
  if (questions.length > 0) {
    displayQuestions = questions.map((q) => {
      return (
        <div className="question-section" key={q.question}>
          <h2 className="question">{q.question}</h2>
          <div className="options">
            {q.incorrect_answers.map((option) => {
              const className = clsx({
                selected: q.selected_answer === option,
                correct: submit && option === q.correct_answer,
                incorrect:
                  submit &&
                  option === q.selected_answer &&
                  option !== q.correct_answer,
              });
              return (
                <button
                  className={className}
                  key={option}
                  onClick={() => onOptionSelect(q.question, option)}
                  disabled={submit}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <hr />
        </div>
      );
    });
  }

  return (
    <>
      {submit && score === questions.length && <Confetti />}
      {questions.length === 0 && (
        <div className="loader">
          <BlinkBlur color="#4D5B9E" size="medium" />
        </div>
      )}
      <section className="quiz-section">{displayQuestions}</section>

      {questions?.length > 0 && (
        <div className="results-section">
          {submit && (
            <h2>
              You scored {score}/{questions.length} correct answers
            </h2>
          )}
          <button onClick={onSubmit} disabled={!allQuestionsAnswered}>
            {!submit ? "Check answers" : "Play again"}
          </button>
        </div>
      )}
    </>
  );
}
