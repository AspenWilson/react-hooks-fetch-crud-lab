import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";


  function QuestionList({questions, onSetQuestions}) {

    function handleDelete(qId) {
      fetch(`http://localhost:4000/questions/${qId}`, {
        method:'DELETE',
      })
      .then((resp) => resp.json())
      .then(() => {
        const remainingQs = questions.filter((q) => q.id !== qId)
        onSetQuestions(remainingQs)
      })
    }

    function handleAnswer(qId, qCorrectIndex) {
      fetch (`http://localhost:4000/questions/${qId}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          'correctIndex': qCorrectIndex
        })
      })
        .then((resp) => resp.json())
        .then(console.log(qCorrectIndex))
    }

    const allQuestions= questions.map((question) => {
    return  <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDelete} onAnswer={handleAnswer}/>
    })

    return (
      <section>
        <h1>Quiz Questions</h1>
        <ul>{allQuestions}</ul>
      </section>
    );
  }
  
  export default QuestionList;
