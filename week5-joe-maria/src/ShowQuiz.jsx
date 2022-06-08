import React from "react";

export default function ShowQuiz(props) {
  // There's probably a terser way of doing this 😌
  const gameState = props.gameState;
  const category = props.category;
  const quizLength = props.quizLength;

  // State value and setter for our actual quiz data (questions, answers, etc.)
  const [quizData, setQuizData] = React.useState(null);

  React.useEffect(() => {
    setQuizData(null);
    fetch(`https://jservice.io/api/category?id=${category}`)
      .then((resolve) => resolve.json())
      .then((resolve) => setQuizData(resolve))
      .catch((error) => console.error(error));
  }, [gameState, category, quizLength]);

  if (gameState === false) {
    // If the gameState is false, don't show the quiz!
    return null;
  } else if (gameState === true) {
    // If the gameState is true, do show the quiz :)

    // Do we have game data yet? If not, show a loading message

    if (quizData === null) {
      return <p>Loading your quiz...</p>;
    } else {
      // Game data has loaded! (i.e. async fetch etc. has resolved). Show the game :)
      console.log(quizData);
      return <p>Game on!</p>;
    }
  }
}
