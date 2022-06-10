import React from "react";
import Header from "./Header";
import QuizForm from "./QuizForm";
import ShowQuiz from "./ShowQuiz";

function useLocalStorageState(key, initial) {
  // Try and get some values from localStorage:
  // Set up defaults if there's nothing in localStorage (i.e. the values are null):
  const [value, setValue] = React.useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initial;
  });

  // localStorage is a side-effect: keep track of these
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

function App() {
  // Set up state values etc.
  const [gameState, setGameState] = useLocalStorageState("gameState", "false");
  const [category, setCategory] = useLocalStorageState("category", "21");
  const [quizLength, setQuizLength] = useLocalStorageState("quizLength", "5");

  return (
    <div>
      <Header />
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

export { App, useLocalStorageState };
