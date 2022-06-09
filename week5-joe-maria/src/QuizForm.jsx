import React from "react";

// Possible categories and respective id's for API call
const categories = [
  { name: "Animals", id: "21" },
  { name: "World Capitals", id: "78" },
  { name: "Nature", id: "267" },
  { name: "Musical Instruments", id: "184" },
  { name: "Food & Drink", id: "253" },
];

export default function QuizForm(props) {
  // Set gameState to true on "Generate Quiz" submission
  function handleFormSubmit(e) {
    e.preventDefault();
    props.setGameState("true");
  }

  // If quiz is in process don't show the form
  if (props.gameState === "true") {
    return null;
    // If game is not in process show the form
  } else if (props.gameState === "false") {
    return (
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Create your quiz:</legend>
          {categories.map((cat) => {
            return (
              <label htmlFor={"cat" + cat.id} key={cat.id}>
                <input
                  type="radio"
                  name="categories"
                  id={"cat" + cat.id}
                  value={cat.id}
                  checked={cat.id === props.category}
                  onChange={(e) => props.setCategory(e.target.value)}
                />
                {cat.name}
              </label>
            );
          })}
          <br></br>

          <label htmlFor="quiz-length">
            How many questions would you like?
            <input
              required
              type="number"
              id="quiz-length"
              min="1"
              max="20"
              value={props.quizLength}
              onChange={(e) => props.setQuizLength(e.target.value)}
            ></input>
          </label>
          <br></br>

          <button type="submit">Generate quiz</button>
        </fieldset>
      </form>
    );
  }
}
