import React from "react";
import QuizLengthInput from "./QuizLengthInput.jsx";
import QuizCategorySelect from "./QuizCategorySelect.jsx";

export default function QuizForm(props) {
  // Set gameState to true on "Generate Quiz" submission
  function handleFormSubmit(e) {
    e.preventDefault();
    props.setGameState("true");
  }

  // If quiz is in process don't show the form
  if (props.gameState === "true") {
    return null;
    // If game is not in process show the form
  } else if (props.gameState === "false") {
    return (
      <form className="generate-form" onSubmit={handleFormSubmit}>
        <h2>Create your quiz!</h2>

        <QuizCategorySelect
          category={props.category}
          setCategory={props.setCategory}
        />
        <QuizLengthInput
          quizLength={props.quizLength}
          setQuizLength={props.setQuizLength}
        />

        <button type="submit" className="generate-button">
          Generate quiz &rarr;
        </button>
      </form>
    );
  }
}
