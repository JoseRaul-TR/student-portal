import React from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  // Find the course in the imported data based on the ID from the URL.
  // Ensure ID is treated as a string for comparison if your IDs are strings in data.
  const course = coursesData.find((course) => course.id === id);

  // If no course is found with the given ID, display a warning message.
  if (!course) {
    return (
      <div className="alert alert-warning" role="alert">
        Kursen hittades inte.{" "}
        <Link to="/courses" className="alert-link">
          Gå tillbaka till kurser
        </Link>
      </div>
    );
  }

  return (
    <div className="card shadow-sm p-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h1 className="card-title mb-3">{course.name}</h1>
            <h5 className="card-subtitle mb-2 text-muted">
              {course.description}
            </h5>
            <p className="card-text mt-3">{course.longDescription}</p>
            <ul className="list-unstyled">
              <li className="list-group-item">
                <strong>Högskolepoäng:</strong> {course.credits}
              </li>
              <li className="list-group-item">
                <strong>Längd:</strong> {course.duration}
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-start">
            {course.teacher_img && (
                <img
                src={course.teacher_img}
                alt={course.teacher}
                className="img-fluid rounded-circle mb-3"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
            )}
            <h6 className="text-center"><strong>Lärare:</strong> {course.teacher}</h6>
          </div>
        </div>
      </div>

      <Link to="/courses" className="btn btn-primary mt-3">
        Tillbaka till kurser
      </Link>
    </div>
  );
}
