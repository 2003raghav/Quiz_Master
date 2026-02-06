import React, { useState, useEffect } from "react";
import { FaCuttlefish } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function CppQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answerState, setAnswerState] = useState({});

  useEffect(() => {
    fetchCppQuestions();
  }, []);

  const fetchCppQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/quiz/category/cpp",
      );

      const questions = response.data.map((item) => ({
        id: item.id,
        question: item.question,
        options: [item.option1, item.option2, item.option3, item.option4],
        category: item.category,
      }));

      setQuizQuestions(questions);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch questions");
      setLoading(false);
    }
  };

  // ✅ Check answer with AI explanation
  const handleAnswerSelect = async (questionId, selectedOption) => {
    try {
      // Set loading state for this question
      setAnswerState((prev) => ({
        ...prev,
        [questionId]: {
          ...prev[questionId],
          loading: true,
        },
      }));

      const res = await axios.post(`http://localhost:8080/quiz/check-answer`, {
        questionId: questionId,
        selectedAnswer: selectedOption,
      });

      // Debug log
      console.log("API Response:", res.data);

      const { isCorrect, correctAnswer, explanation } = res.data;

      setAnswerState((prev) => ({
        ...prev,
        [questionId]: {
          selectedOption,
          correctAnswer,
          isCorrect,
          explanation,
          loading: false,
        },
      }));
    } catch (err) {
      console.error("Error checking answer", err);
      setAnswerState((prev) => ({
        ...prev,
        [questionId]: {
          ...prev[questionId],
          loading: false,
          explanation: "Failed to get explanation. Please try again.",
        },
      }));
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
        C++ Quiz <FaCuttlefish className="text-info ms-2" />
      </h2>

      {quizQuestions.length === 0 ? (
        <div className="alert alert-info text-center">
          No C++ questions available.
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

                  if (state && !state.loading) {
                    if (option === state.selectedOption) {
                      btnClass = state.isCorrect ? "btn-success" : "btn-danger";
                    }
                    if (option === state.correctAnswer && !state.isCorrect) {
                      btnClass = "btn-success";
                    }
                  }

                  return (
                    <button
                      key={i}
                      className={`btn ${btnClass} w-100 mb-2 text-start`}
                      onClick={() => handleAnswerSelect(q.id, option)}
                      disabled={state && !state.loading}
                    >
                      {option}
                    </button>
                  );
                })}

                {/* ✅ Show loading state */}
                {answerState[q.id]?.loading && (
                  <div className="alert alert-info mt-3">
                    <div className="spinner-border spinner-border-sm me-2" />
                    Generating explanation...
                  </div>
                )}

                {/* ✅ Show AI explanation */}
                {answerState[q.id]?.explanation &&
                  !answerState[q.id]?.loading && (
                    <div
                      className={`alert mt-3 ${
                        answerState[q.id]?.isCorrect
                          ? "alert-success"
                          : "alert-warning"
                      }`}
                    >
                      <strong>
                        {answerState[q.id]?.isCorrect
                          ? "✅ Correct!"
                          : "❌ Incorrect"}
                      </strong>
                      <p className="mb-0 mt-2">
                        {answerState[q.id]?.explanation}
                      </p>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CppQuiz;
