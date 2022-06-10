import React from "react";

export default function BackButton(props) {
  const {
    setGameState,
    setAnswerToggles,
    setRandomStartIndex,
    getRandomStartIndex,
    label,
  } = props;

  return (
    <input
      className="back-button"
      type="button"
      value={label}
      onClick={() => {
        setGameState("false");
        // Reset the answer toggles so it doesn't interfere with the next game:
        setAnswerToggles([]);
        // Get a new random start index for the next game:
        setRandomStartIndex(getRandomStartIndex());
      }}
    />
  );
}
