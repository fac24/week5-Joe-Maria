import React from "react";

export default function ShowQuiz(props) {
  const gameState = props.gameState;

  if (gameState === false) {
    // If the gameState is false, don't show the quiz!
    return null;
  } else if (gameState === true) {
    // If the gameState is true, do show the quiz :)
    return <p>Game on!</p>;
  }
}
