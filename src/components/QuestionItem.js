import React from "react";

function QuestionItem({ question, onDeleteQuestion, onAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  console.log(question)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleAnsweredQuestion(event) {
    onAnswer(id, parseInt(event.target.value, 10))
  }


  return (
    <li >
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnsweredQuestion} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
