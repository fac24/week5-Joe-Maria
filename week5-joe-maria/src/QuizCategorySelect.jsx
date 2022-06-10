import React from "react";
import categories from "./categories";

// Iterate through each category from the categories.js file and create a radio button for each
// onClick setCategory() to selected category for API call in ShowQuiz.jsx

export default function QuizCategorySelect(props) {
  return (
    <>
      <p className="form-prompt">Pick a category:</p>
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
    </>
  );
}
