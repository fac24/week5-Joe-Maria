import React from "react";

// quizLength will be updated with the setQuizLength() state for the API call in ShowQuiz.jsx

export default function QuizLengthInput(props) {
  return (
    <label className="form-prompt" htmlFor="quiz-length">
      How many questions would you like?
      <input
        required
        type="number"
        id="quiz-length"
        min="1"
        max="20"
        value={props.quizLength}
        onChange={(e) => props.setQuizLength(e.target.value)}
      ></input>
    </label>
  );
}
