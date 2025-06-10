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
import Footer from "./components/Footer";

function App() {
  return (
    <div className="gradient-background d-flex flex-grow-1 h-100 w-100 flex-column justify-content-center align-items-center">
      <Navbar />
      <div className="container p-4 m-4 m-md-4 d-flex flex-column justify-content-center align-items-center flex-grow-1 rounded">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="/studentblogg" element={<StudentsBlog />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
