import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'; // Using Material UI Button as per assignment

function CourseCard({ course }) {
  return (
    <div className="card h-100 shadow-sm"> {/* Använd h-100 för att korten ska ha samma höjd i grid */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text flex-grow-1">{course.description}</p> {/* flex-grow-1 för att fylla utrymme */}
        <Button
          component={Link} // Use Link from react-router-dom for navigation
          to={`/courses/${course.id}`}
          variant="contained" // Material UI button style
          color="primary" // Material UI color
          sx={{ mt: 3, borderRadius: '0.5rem' }} // Custom Material UI styling
        >
          Läs mer
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;