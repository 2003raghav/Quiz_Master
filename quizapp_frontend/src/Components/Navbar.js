import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaJava, FaPython, FaCuttlefish, FaSearch } from "react-icons/fa";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #4B6CB7, #182848)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4 text-light" to="/">
          🧩 QuizMaster
        </Link>

        <div className="collapse navbar-collapse justify-content-between">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/java">
                <FaJava /> Java
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/python">
                <FaPython /> Python
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/cpp">
                <FaCuttlefish /> C++
              </Link>
            </li>
          </ul>

          {/* 🔍 Search */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search quiz..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light rounded-pill">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
