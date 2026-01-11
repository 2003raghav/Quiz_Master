import React, { useState, useEffect } from "react";
import { FaPython } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function PythonQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // store answer result per question
  const [answerState, setAnswerState] = useState({});

  useEffect(() => {
    fetchPythonQuestions();
  }, []);

  const fetchPythonQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/quiz/category/python"
      );

      const questions = response.data.map((item) => ({
        id: item.id,
        question: item.question,
        options: [
          item.option1,
          item.option2,
          item.option3,
          item.option4,
        ],
        category: item.category,
      }));

      setQuizQuestions(questions);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch questions");
      setLoading(false);
    }
  };

  // 🔹 CHECK ANSWER USING BACKEND
  const handleAnswerSelect = async (questionId, selectedOption) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/quiz/answer/${questionId}`
      );

      const correctAnswer = res.data;

      setAnswerState((prev) => ({
        ...prev,
        [questionId]: {
          selectedOption,
          correctAnswer,
        },
      }));
    } catch (err) {
      console.error("Error checking answer", err);
    }
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border" />
        <p className="mt-2">Loading questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Python Quiz <FaPython className="text-primary ms-2" />
      </h2>

      {quizQuestions.length === 0 ? (
        <div className="alert alert-info text-center">
          No Python questions available.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {quizQuestions.map((q, index) => (
            <div key={q.id} className="col">
              <div className="card shadow-sm h-100 p-3">
                <h5 className="card-title">
                  {index + 1}. {q.question}
                </h5>

                {q.options.map((option, i) => {
                  const state = answerState[q.id];

                  let btnClass = "btn-outline-primary";

                  if (state) {
                    if (option === state.selectedOption) {
                      btnClass =
                        option === state.correctAnswer
                          ? "btn-success"
                          : "btn-danger";
                    }
                  }

                  return (
                    <button
                      key={i}
                      className={`btn ${btnClass} w-100 mb-2 text-start`}
                      onClick={() =>
                        handleAnswerSelect(q.id, option)
                      }
                      disabled={!!state}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PythonQuiz;
