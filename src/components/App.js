import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [loadQuestions, setLoadQuestions] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((resp) => resp.json())
    .then((questions) => {
      setQuestions(questions)
      setLoadQuestions(true)
    })
  }, [])


  function handleNewQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }


  if (!setLoadQuestions) return <p>Loading questions...</p>

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleNewQuestion}/> : <QuestionList questions={questions} onSetQuestions={setQuestions} />}
    </main>
  );
}

export default App;
