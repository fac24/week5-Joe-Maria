import React from "react";
import QuizForm from "./QuizForm";
import ShowQuiz from "./ShowQuiz";

function App() {
  const [gameState, setGameState] = React.useState(false);
  // Stretch goal: could have more than two game states (paused) if user wants to continue started game after going back to form
  const [category, setCategory] = React.useState("21");
  const [quizLength, setQuizLength] = React.useState(5);

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
