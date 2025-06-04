import React, { useState } from "react";
import coursesData from "../data/courses"; // Import course data
import CourseCard from "../components/CourseCard"; // Import CourseCard component

export default function Courses() {
  const [searchItem, setSearchItem] = useState("");

  // Filter courses based on search term
  const filteredCourses = coursesData.filter(
    (course) =>
      course.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      course.teacher.toLowerCase().includes(searchItem.toLowerCase()) ||
      course.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <h1 className="mb-4">Våra Kurser</h1>

      {/* Search input field */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Sök kurs efter namn, lärare eller beskrivning..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

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
            <div className="alert alert-info text-center" role="alert">
              Inga kurser hittades som matchar din sökning.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
