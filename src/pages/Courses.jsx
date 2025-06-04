import React from "react";
import coursesData from "../data/courses"; // Import course data
import CourseCard from "../components/CourseCard"; // Import CourseCard component

export default function Courses() {
  return (
    <>
      <h1 className="mb-4">Våra Kurser</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> {/* Bootstrap Grid */}
        {coursesData.map((course) => (
          <div className="col" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </>
  );
}
