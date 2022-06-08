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
  }, [category, quizLength]);
  // Do we need gameState to be a dependency too? (Might.. depend, lol)

  if (gameState === false) {
    // Hide the quiz (a false game state means the form is being used to set it up)
    return null;
  } else if (gameState === true) {
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
      // And also how many clues we've checked through from the API response:
      let clueIdx = 0;

      // Show as many clues as the user asked for:
      while (numCluesShown < quizLength) {
        const id = quizData.clues[clueIdx].id;
        const question = quizData.clues[clueIdx].question;
        const answer = quizData.clues[clueIdx].answer;

        // Some questions are blank (and for all we know, some answers might be too).
        // Don't show them!
        if (question !== "" && answer !== "") {
          cluesJsx.push(
            <li className="clue-card" key={id}>
              <div className="clue-card-question">{question}</div>
              <div className="clue-card-answer">{answer}</div>
            </li>
          );
          // We showed a clue, so increment the counter :)
          numCluesShown++;
        }
        // Regardless of whether we showed a clue or not, move on to the next one
        // from the API response on the next iteration of this loop.
        clueIdx++;
      }

      return <ul className="clues-list">{cluesJsx}</ul>;
    }
  }
}
