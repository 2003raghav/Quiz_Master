import React from "react";
import { FaJava } from "react-icons/fa";

function JavaQuiz() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center m-4 p-2">Java Quiz <FaJava className="me-1" /> </h2>
      <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {
          quizQuestions.map((q,index) => (
            <div key={q.id} className="card mb-3 p-3 col">
            <h3 className="m-4">
             {index + 1}. {q.question} 
            </h3>  
            <ul>
              {q.options.map((option, index) => (
                <li key={index} className="list-unstyled fs-5 fs-md-3 fs-lg-3 " >
                  <button className="btn1 p-1 m-1" style={{border:'none', backgroundColor:'white'}}>{option}</button>
                </li>
              ))}
            </ul>
            </div>

        ))}

      </div>
    </div>
  );
}

export default JavaQuiz;
