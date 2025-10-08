import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import JavaQuiz from './pages/JavaQuiz'
import PythonQuiz from './pages/PythonQuiz'
import CppQuiz from './pages/CppQuiz'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java" element={<JavaQuiz />} />
          <Route path="/python" element={<PythonQuiz />} />
          <Route path="/cpp" element={<CppQuiz />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
