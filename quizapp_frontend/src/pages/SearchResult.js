import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/quiz/search?keyword=${query}`)
      .then((res) => setResults(res.data));
  }, [query]);

  return (
    <div className="container mt-4">
      <h3>Search Results for "{query}"</h3>

      {results.length === 0 && <p>No quizzes found</p>}

      {results.map((q) => (
        <div key={q.id} className="card my-3 p-3">
          <h5>{q.question}</h5>
          <p className="text-muted">Category: {q.category}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
