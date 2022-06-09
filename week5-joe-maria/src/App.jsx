import React from "react";
import QuizForm from "./QuizForm";
import ShowQuiz from "./ShowQuiz";

function App() {
  // Try and get some values from localStorage:
  let localStorageGameState = localStorage.getItem("gameState");
  let localStorageCategory = localStorage.getItem("category");
  let localStorageQuizLength = localStorage.getItem("quizLength");

  // Set up defaults if there's nothing in localStorage (i.e. the values are null):
  if (localStorageGameState === null) {
    // Game is not playing by default
    localStorageGameState = "false";
  }
  if (localStorageCategory === null) {
    // Category 21 ("Animals") is default
    localStorageCategory = "21";
  }
  if (localStorageQuizLength === null) {
    // 5 "clues" is default
    localStorageQuizLength = "5";
  }

  // Set up state values etc.
  const [gameState, setGameState] = React.useState(localStorageGameState);
  const [category, setCategory] = React.useState(localStorageCategory);
  const [quizLength, setQuizLength] = React.useState(localStorageQuizLength);

  // localStorage is a side-effect: keep track of these
  React.useEffect(() => {
    window.localStorage.setItem("gameState", gameState);
    window.localStorage.setItem("category", category);
    window.localStorage.setItem("quizLength", quizLength);
  }, [gameState, category, quizLength]);

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
