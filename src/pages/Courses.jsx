import { Link } from "react-router-dom";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const coursesData = [
  {
    id: 1,
    name: "Introduktion till Programmering",
    description: "En grundläggande kurs i programmering.",
  },
  {
    id: 2,
    name: "Avancerad JavaScript",
    description: "Fördjupa dina kunskaper i JavaScript.",
  },
  {
    id: 3,
    name: "Webbutveckling med React",
    description: "Lär dig bygga moderna webbapplikationer med React.",
  },
];

export default function Courses() {
  return (
    <>
      <h2>Våra kurser</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {coursesData.map((course) => (
          <div className="col" key={course.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>

                <Stack spacing={2} direction="row">
                  <Button
                    component={Link}
                    to={`/courses/${course.id}`}
                    size="medium"
                    color="secondary"
                  >
                    Läs mer
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
