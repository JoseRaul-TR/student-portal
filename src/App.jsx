import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import StudentsBlog from "./pages/StudentsBlog";
import Registration from "./pages/Registration";
import CourseDetails from "./pages/CourseDetails";

// Components
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFoundPage"; // 404 Not Found Page

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="/studentblogg" element={<StudentsBlog />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
