import React from "react";

export default function ShowQuiz(props) {
  // There's probably a terser way of doing this 😌
  const gameState = props.gameState;
  const setGameState = props.setGameState;
  const category = props.category;
  const quizLength = props.quizLength;
  // And also how many clues we've checked through from the API response:
  let clueIdx = 0;

  // Don't forget to JSON parse (and stringify) for the localStorage array!
  let localStorageAnswerToggles = JSON.parse(
    localStorage.getItem("answerToggles")
  );

  if (localStorageAnswerToggles === null) {
    // All answers are hidden by default
    localStorageAnswerToggles = [];
  }

  // State value and setter for our actual quiz data (questions, answers, etc.)
  const [quizData, setQuizData] = React.useState(null);
  // const [answerToggles, setAnswerToggles] = React.useState([]);

  const [answerToggles, setAnswerToggles] = React.useState(
    localStorageAnswerToggles
  );

  React.useEffect(() => {
    window.localStorage.setItem("answerToggles", JSON.stringify(answerToggles));
  }, [answerToggles]);

  React.useEffect(() => {
    setQuizData(null);
    fetch(`https://jservice.io/api/category?id=${category}`)
      .then((resolve) => resolve.json())
      .then((resolve) => setQuizData(resolve))
      .catch((error) => console.error(error));
  }, [category, quizLength]);
  // Do we need gameState to be a dependency too? (Might.. depend, lol)

  console.log(gameState);

  React.useEffect(() => {
    createRandomIndex();
    console.log(clueIdx);
  }, [gameState]);

  // Generate a random number to specify from what index to start getting questions from API (stops the quiz showing the same questions all the time!)
  // All categories have at least 115 Q'sso omit a bunch to allow for weird API responses to be skipped and max quiz length from user input
  function createRandomIndex() {
    clueIdx = Math.floor(Math.random() * (80 - 0 + 1) + 0);
    return;
  }

  if (gameState === "false") {
    // Hide the quiz (a false game state means the form is being used to set it up)
    return null;
  } else if (gameState === "true") {
    // Play the game (show the quiz)
    // Do we have game data yet?
    if (quizData === null) {
      // If not, show a loading message:
      return <p>Loading your quiz...</p>;
    } else {
      // Game data has loaded! (i.e. async fetch etc. has resolved). Show the game :)
      // console.log(quizData);

      // NB: we might call them "questions", but the API calls them "clues", so.. :P

      // All the clue JSX(?) will end up in this array:
      const cluesJsx = [];

      // Keep track of how many clues we've shown:
      let numCluesShown = 0;

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
            <li className="clue-card" key={id}>
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
            value="Bin this quiz and make me another!"
            onClick={() => {
              setGameState("false");
              // Reset the answer toggles so it doesn't interfere with the next game:
              setAnswerToggles([]);
            }}
          />
          <ul className="clues-list">{cluesJsx}</ul>
        </>
      );
    }
  }
}
