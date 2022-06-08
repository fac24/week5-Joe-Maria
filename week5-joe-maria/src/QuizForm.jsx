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
  // Toggle the gameState on "Generate Quiz" submission
  function handleGameState(e) {
    e.preventDefault();
    !props.gameState ? props.setGameState(true) : props.setGameState(false);
  }

  // If quiz is in process don't show the form
  if (props.gameState) {
    return null;
    // If game is not in process show the form
  } else {
    return (
      <form onSubmit={handleGameState}>
        <fieldset>
          <legend>Create your quiz:</legend>
          {categories.map((cat) => {
            return (
              <label htmlFor={cat.name} key={cat.id}>
                <input
                  type="radio"
                  name="categories"
                  id={cat.id}
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
