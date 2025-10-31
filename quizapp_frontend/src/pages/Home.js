import React from "react";
import "../App.css"; 
import javaImage from '../assets/Java.png';
import pythonImage from '../assets/Python.jpg';
import cppImage from '../assets/Cpp.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <div className="text-center pt-4 mt-2">
            <h1 style={{ 
                      fontSize: "clamp(1rem, calc(3vw + 0.7rem) , 2rem)",
                      fontWeight: "700", 
                      background:"linear-gradient(90deg, #36D1DC, #5B86E5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"}}>
                  Welcome to Quiz Master <span className="bounce" style={{background:"none", WebkitTextFillColor: "initial" }}>🧩</span>
            </h1>
            <h2 style={{
                        fontSize: "clamp(0.8rem, calc(2vw + 0.7rem) , 1.5rem)",
                        fontWeight: "500", 
                        background:"linear-gradient(90deg, #4B6CB7, #182848)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"}}>
                   Sharpen your coding skills with fun quizzes on Java, Python, and C++!
            </h2>
      </div>
       
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={javaImage} className="card-img-top mx-auto d-block"  alt="Java Image"  
                    style={{ width: "150px", 
                    height: "150px", 
                    objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Java</h5>
                <p className="card-text">
                 Object-Oriented powerhouse – are you ready to take on?
                </p>
                <Link to='/java' className="btn btn-primary mt-auto">Take Quiz</Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={pythonImage} className="card-img-top  mx-auto d-block" alt="Python Image" 
               style={{ width: "150px", 
                    height: "150px", 
                    objectFit: "cover" }}/>
              <div className="card-body text-center">
                <h5 className="card-title">Python</h5>
                <p className="card-text">
                 Simple yet powerful – ohh yes let’s see what you’ve got!
                </p>
                <Link to='/python' className="btn btn-primary mt-auto">Take Quiz</Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={cppImage} className="card-img-top  mx-auto d-block" alt="C++ Image" 
               style={{ width: "150px", 
                    height: "150px", 
                    objectFit: "cover" }}/>
              <div className="card-body text-center">
                <h5 className="card-title">C++</h5>
                <p className="card-text">
                  The language of logic and performance – are you ready to play ?
                </p>
                <Link to='/cpp' className="btn btn-primary mt-auto">Take Quiz</Link>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <form action="mailto:raghav251203@gmail.com" method="post" enctype="text/plain" className="d-flex flex-column align-items-center p-4 shadow-sm rounded-3 bg-light mx-auto mb-4" style={{ maxWidth: "500px" ,border:"1px solid #ddd"}}> 
      <span className="fs-3 fw-semibold mb-3 text-center">Please give your feedback</span>
        <div className="mb-3 w-100">
          <label htmlFor="name" className="form-label">Name</label> 
          <input type="text" name="name" placeholder="Your name" className="form-control"/>
        </div>
        <div className="mb-3 w-100">
          <label htmlFor="message" className="form-label">Feedback</label> 
          <textarea name="message" placeholder="Your feedback" className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Feedback</button>
      </form>
    </div>
  );
}

export default Home;
