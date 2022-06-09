import React from "react";
import QuizForm from "./QuizForm";
import ShowQuiz from "./ShowQuiz";

function App() {
  let localStorageGameState = localStorage.getItem("gameState");

  if (localStorageGameState === null) {
    localStorageGameState = "false";
  }

  const [gameState, setGameState] = React.useState(localStorageGameState);
  // Stretch goal: could have more than two game states (paused) if user wants to continue started game after going back to form
  const [category, setCategory] = React.useState("21");
  const [quizLength, setQuizLength] = React.useState(5);

  React.useEffect(() => {
    window.localStorage.setItem("gameState", gameState);
  }, [gameState]);

  return (
    <div>
      <h1>Hello world!</h1>
      <QuizForm
        gameState={gameState}
        setGameState={setGameState}
        category={category}
        setCategory={setCategory}
        quizLength={quizLength}
        setQuizLength={setQuizLength}
      />
      <ShowQuiz
        gameState={gameState}
        setGameState={setGameState}
        category={category}
        quizLength={quizLength}
      />
    </div>
  );
}

export default App;
