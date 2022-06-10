import React from "react";

function ClueCard(props) {
  const { id, question, answerToggles, setAnswerToggles, answer } = props;

  return (
    <li className="clue-card">
      <div className="clue-card-question">{question}</div>
      <button
        onClick={() =>
          setAnswerToggles((oldArray) => {
            const newArray = [...oldArray];
            if (oldArray.indexOf(id) === -1) {
              newArray.push(id);
            } else {
              newArray.splice(oldArray.indexOf(id), 1);
            }
            return newArray;
          })
        }
      >
        {answerToggles.includes(id) ? "Hide" : "Reveal"}
      </button>
      <span
        className="clue-card-answer"
        hidden={answerToggles.includes(id) ? false : true}
      >
        {answer}
      </span>
    </li>
  );
}

export default ClueCard;
