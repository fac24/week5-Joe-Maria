import React from "react";
import { useLocalStorageState } from "./App";
import ClueCard from "./ClueCard";
import ShowMessage from "./ShowMessage";

export default function ShowQuiz(props) {
  function getRandomStartIndex() {
    // Min 0, max 80.
    // We set max 80 because our smallest category has ~115 questions.
    // So accounting for some broken Qs, we should still be able to let users select 20 Qs.
    return Math.floor(Math.random() * (80 - 0 + 1) + 0);
  }

  const { gameState, setGameState, category, quizLength } = props;

  // State value and setter for our actual quiz data (questions, answers, etc.)
  const [quizData, setQuizData] = React.useState(null);
  const [errorFeedback, setErrorFeedback] = React.useState("");
  const [answerToggles, setAnswerToggles] = useLocalStorageState(
    "answerToggles",
    []
  );
  const [randomStartIndex, setRandomStartIndex] = useLocalStorageState(
    "randomStartIndex",
    getRandomStartIndex()
  );

  React.useEffect(() => {
    // Reset quizData and errorFeedback before each new fetch
    setQuizData(null);
    setErrorFeedback("");
    fetch(`https://jservice.io/api/category?id=${category}`)
      .then((resolve) => resolve.json())
      .then((resolve) => setQuizData(resolve))
      .catch((error) => {
        // console.error(error);
        setErrorFeedback(`${error}`);
      });
  }, [category, quizLength]);
  // Do we need gameState to be a dependency too? (Might.. depend, lol)

  if (gameState === "false") {
    // Hide the quiz (a false game state means the form is being used to set it up)
    return null;
  } else if (gameState === "true") {
    // Play the game (show the quiz)
    // Do we have game data yet?
    if (quizData === null) {
      // If not, show a loading or error message:
      return <ShowMessage errorFeedback={errorFeedback} />;
    } else {
      // Game data has loaded! (i.e. async fetch etc. has resolved). Show the game :)
      // console.log(quizData);

      // NB: we might call them "questions", but the API calls them "clues", so.. :P

      // All the clue JSX(?) will end up in this array:
      const cluesJsx = [];

      // Keep track of how many clues we've shown:
      let numCluesShown = 0;

      // clueIdx keeps track of how many clues we've checked through from the API response.
      // It gets the random start index, but importantly we *don't* increment randomStartIndex itself!
      let clueIdx = randomStartIndex;

      // Show as many clues as the user asked for:
      while (numCluesShown < Number(quizLength)) {
        const id = quizData.clues[clueIdx].id;
        const question = quizData.clues[clueIdx].question;
        const answer = quizData.clues[clueIdx].answer;

        // Free APIs are of ~mixed quality~ :D
        // We need to catch junk cases here and ignore them!
        // Some questions are blank (and for all we know, some answers might be too).
        // Some Qs/As have "=" for some reason. Etc., etc.
        if (
          question !== "" &&
          question !== "=" &&
          answer !== "" &&
          answer !== "="
        ) {
          cluesJsx.push(
            <ClueCard
              key={id}
              id={id}
              question={question}
              answerToggles={answerToggles}
              setAnswerToggles={setAnswerToggles}
              answer={answer}
            />
          );
          // We showed a clue, so increment the counter :)
          numCluesShown++;
        }
        // Regardless of whether we showed a clue or not, move on to the next one
        // from the API response on the next iteration of this loop.
        clueIdx++;
      }

      return (
        <>
          <input
            className="back-button"
            type="button"
            value="&larr; End this quiz"
            onClick={() => {
              setGameState("false");
              // Reset the answer toggles so it doesn't interfere with the next game:
              setAnswerToggles([]);
              // Get a new random start index for the next game:
              setRandomStartIndex(getRandomStartIndex());
            }}
          />
          <ul className="clues-list">{cluesJsx}</ul>
        </>
      );
    }
  }
}
