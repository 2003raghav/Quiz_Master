import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaJava, FaPython, FaCuttlefish, FaSearch } from "react-icons/fa";

function Navbar() {
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

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/java">
                <FaJava className="me-1" /> Java
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/python">
                <FaPython className="me-1" /> Python
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-semibold" to="/cpp">
                <FaCuttlefish className="me-1" /> C++
              </Link>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex align-items-center" role="search">
            <input
              className="form-control me-2 rounded-pill px-3"
              type="search"
              placeholder="Search quiz..."
              aria-label="Search"
              style={{ width: "200px" }}
            />
            <button
              className="btn btn-outline-light rounded-pill px-3"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
