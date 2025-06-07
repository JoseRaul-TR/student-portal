import React, { useState } from "react";

import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import SearchFilter from "../components/SearchFilter";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Courses() {
  const [searchItem, setSearchItem] = useState("");

  const filteredCourses = courses.filter((course) => {
    if (!searchItem.trim()) {
      return true;
    }

    const lowerCaseSearchItem = searchItem.toLowerCase();

    return ["name", "teacher", "description"].some((key) => {
      const value = course[key];
      if (value && typeof value === "string") {
        return value.toLowerCase().includes(lowerCaseSearchItem);
      }
      return false;
    });
  });

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ mb: 4, color: "primary.main", textAlign: 'center' }}
      >
        Kurskatalog
      </Typography>
      {/* Use the SearchFilter component as a pure input controller */}
      <SearchFilter
        placeholderText="Sök kurs efter namn, lärare eller beskrivning..."
        searchItem={searchItem} // Pass the searchItem state
        setSearchItem={setSearchItem} // Pass the setter function
      >
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div className="col" key={course.id}>
                <CourseCard course={course} />
              </div>
            ))
          ) : (
            // If no course matches the search
            <div className="col-12">
              <div
                className="alert alert-info text-center"
                role="alert"
                style={{
                  backgroundColor: "var(--hogwarts-parchment)",
                  color: "var(--hogwarts-text-dark)",
                  borderColor: "var(--hogwarts-gold)",
                  borderWidth: "2px",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                  marginTop: "1rem",
                }}
              >
                Inga kurser hittades som matchar din sökning.
              </div>
            </div>
          )}
        </div>
      </SearchFilter>
    </Box>
  );
}
