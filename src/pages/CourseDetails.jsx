import React from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses"; // Import course data

export default function CourseDetails() {
    const { id } = useParams();
    // Ensure ID is treated as a string for comparison if your IDs are strings in data
    const course = coursesData.find((c) => c.id === id);

    if (!course) {
        return (
            <div className="alert alert-warning" role="alert">
                Kursen hittades inte. <Link to="/courses">Gå tillbaka till kurser</Link>
            </div>
        );
    }

    return (
        <div className="card shadow-sm p-4">
            <h1 className="card-title mb-3">{course.name}</h1>
            <h5 className="card-subtitle mb-2 text-muted">{course.description}</h5>
            <p className="card-text mt-3">{course.longDescription}</p> {/* Display long description */}
            <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><strong>Högskolepoäng:</strong> {course.credits}</li>
                <li className="list-group-item"><strong>Längd:</strong> {course.duration}</li>
                <li className="list-group-item"><strong>Lärare:</strong> {course.teacher}</li>
            </ul>
            <Link to="/courses" className="btn btn-primary mt-3">Tillbaka till kurser</Link>
        </div>
    );
}