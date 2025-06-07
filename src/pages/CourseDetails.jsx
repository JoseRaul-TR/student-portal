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
      <div
        className="alert alert-warning"
        role="alert"
        style={{
          margin: "20px auto",
          maxWidth: "600px",
          backgroundColor: "var(--hogwarts-parchment)",
          color: "var(--hogwarts-text-dark)",
          borderColor: "var(--hogwarts-secondary-red)",
          borderWidth: "2px",
          borderRadius: "0.75rem",
          padding: "2rem",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          Kursen hittades inte.
          <Link
            to="/courses"
            className="alert-link"
            style={{
              color: "var(--hogwarts-secondary-red)",
              textDecoration: "underline",
            }}
          >
            Gå tillbaka till kurser
          </Link>
        </Typography>
      </div>
    );
  }

  // Image source for teacher_img if available, otherwise placeholderImg
  const teacherImgSrc = course.teacher_img || placeholderImg;
  return (
    <div
      className="card shadow-sm p-4"
      style={{ maxWidth: "900px", margin: "20px auto" }}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ color: 'primary.main', mb: 3 }}
            >
              {course.name}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              gutterBottom
            >
              {course.description}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mt: 3 }}
            >
              {course.longDescription}
            </Typography>
            <Typography variant="body1" component="div" sx={{ mt: 2 }}>
              <p className="mb-1">
                <strong>Högskolepoäng:</strong> {course.credits}
              </p>
              <p className="mb-0">
                <strong>Längd:</strong> {course.duration}
              </p>
            </Typography>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-start">
            {course.teacher_img && (
              <Box
                component="img"
                src={teacherImgSrc}
                alt={course.teacher || "Placeholder image"}
                className="mb-3 teacher-img-detail"
                sx={{ boxShadow: 3, border: '2px solid', borderColor: 'hogwarts.gold' }}
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
