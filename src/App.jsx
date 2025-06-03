import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Registration from "./pages/Registration";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <div className="bg-light text-dark d-flex flex-column vh-100">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails/>} />
          <Route path="/news" element={<News />} />
          <Route path="/registration" element={<Registration />} />
          {/* Route -> wrong URL */}
          <Route
            path="*"
            element={
              <div className="">
                <h2>404 - Sidan hittades inte</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
