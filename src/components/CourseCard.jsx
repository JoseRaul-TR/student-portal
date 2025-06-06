import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CourseCard({ course }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <Typography variant="h6" component="h5" className="card-title">
          {course.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-text flex-grow-1"
        >
          {course.description}
        </Typography>
        <Button
          component={Link}
          to={`/courses/${course.id}`}
          variant="contained"
          color="primary"
          sx={{ mt: 3, borderRadius: "0.5rem" }}
        >
          Läs mer
        </Button>
      </div>
    </div>
  );
}
