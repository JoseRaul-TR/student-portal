import React from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses";
import placeholderImg from "../assets/placeholder.webp";


import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);

  // If no course is found with the given ID, display a warning message.
  if (!course) {
    return (
      <div className="alert alert-warning" role="alert" style={{ margin: '20px' }}>
        Kursen hittades inte.
        <Link to="/courses" className="alert-link">
          Gå tillbaka till kurser
        </Link>
      </div>
    );
  }

    return (
    <div className="card shadow-sm p-4" style={{ maxWidth: '900px', margin: '20px auto' }}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <Typography variant="h4" component="h1" gutterBottom className="card-title mb-3 text-align-center">
              {course.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom className="card-subtitle mb-2 text-muted">
              {course.description}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 3 }} className="card-text">
              {course.longDescription}
            </Typography>
            <Typography variant="body1" component="div" sx={{ mt: 2 }}>
              <p className="mb-1"><strong>Högskolepoäng:</strong> {course.credits}</p>
              <p className="mb-0"><strong>Längd:</strong> {course.duration}</p>
            </Typography>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-start">
            {course.teacher_img && (
              <Box
                component="img"
                src={course.teacher_img}
                alt={course.teacher}
                className="img-fluid rounded-circle mb-3 teacher-img-detail"
                sx={{ boxShadow: 3 }}
              />
            )}
            <Typography variant="subtitle1" component="h6" align="center">
              <strong>Lärare:</strong> {course.teacher}
            </Typography>
          </div>
        </div>
      </div>

      <Button
        component={Link}
        to="/courses"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Tillbaka till kurser
      </Button>
    </div>
  );
}