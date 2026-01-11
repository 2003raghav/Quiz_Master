import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light mt-auto pt-4 pb-3"
      style={{
        background: "linear-gradient(90deg, #182848, #4B6CB7)",
        boxShadow: "0 -3px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          {/* About Section */}
          <div className="col-md-4 mb-3 text-center text-md-start">
            <h5 className="fw-bold">🧩 QuizMaster</h5>
            <p className="small mb-0">
              Master your skills with interactive quizzes on Java, Python, C++, and more.
              Stay sharp, stay smart!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-2 text-center text-md-start">Quick Links</h6>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 flex-wrap mb-0">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/java" className="text-light text-decoration-none">Java</Link></li>
              <li><Link to="/python" className="text-light text-decoration-none">Python</Link></li>
              <li><Link to="/cpp" className="text-light text-decoration-none">C++</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3 text-center text-md-end">
            <h6 className="fw-bold mb-2">Follow Us</h6>
            <a
              href="https://github.com/2003raghav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5 mx-2"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-light mt-3 mb-2" />

      <div className="text-center small">
        © {new Date().getFullYear()} QuizMaster | Built with ❤️ by Raghavendra Kashyap C B
      </div>
    </footer>
  );
}

export default Footer;
