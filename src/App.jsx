import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Registration from "./pages/Registration";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-4 flex-grow-1">
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
              <div className="text-center py-5">
                <h2 className="display-4">404 - Sidan hittades inte</h2>
                <p className="lead">Vi kunde inte hitta sidan du letade efter.</p>
                <Link to="/" className="btn btn-primary mt-3">Gå till startsidan</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
