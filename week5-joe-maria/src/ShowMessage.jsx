import React from "react";

function ShowMessage(props) {
  const { errorFeedback } = props;

  if (errorFeedback === "") {
    return <div className="message">Loading your quiz...</div>;
  } else {
    return (
      <div className="error">
        <h3>Sorry, there's been an error!</h3>
        <p>{errorFeedback}</p>
      </div>
    );
  }
}

export default ShowMessage;
