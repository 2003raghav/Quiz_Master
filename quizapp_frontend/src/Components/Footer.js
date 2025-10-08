import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-4 pb-3 mt-5"
      style={{
        background: "linear-gradient(90deg, #182848, #4B6CB7)",
        boxShadow: "0 -3px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🎯 QuizMaster</h5>
            <p className="small">
              Master your skills with interactive quizzes on Java, Python, C++, and more.
              Stay sharp, stay smart!
            </p>
          </div>

          {/* Quick Links */}
              <div className="col-md-4 mb-3">
                <h6 className="fw-bold mb-3">Quick Links</h6>
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
                  <li>
                    <Link to="/" className="text-light text-decoration-none">Home</Link>
                  </li>
                  <li>
                    <Link to="/java" className="text-light text-decoration-none">Java</Link>
                  </li>
                  <li>
                    <Link to="/python" className="text-light text-decoration-none">Python</Link>
                  </li>
                  <li>
                    <Link to="/cpp" className="text-light text-decoration-none">C++</Link>
                  </li>
                </ul>
              </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3 text-center text-md-end">
            <h6 className="fw-bold mb-2">Follow Us</h6>
            <div>
              <a href="https://github.com/2003raghav#" className="text-light fs-5"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-light mt-4" />

      <div className="text-center small">
        © {new Date().getFullYear()} QuizMaster | Built with ❤️ using React & Bootstrap
      </div>
    </footer>
  );
}

export default Footer;
