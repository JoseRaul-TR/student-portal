// src/pages/Courses.jsx
import React, { useState } from "react"; // <-- Import useState
import courses from "../data/courses"; // Import course data
import CourseCard from "../components/CourseCard"; // Import CourseCard component
import SearchFilter from "../components/SearchFilter"; // <-- Import SearchFilter component

export default function Courses() {
  // Manage searchItem state directly in Courses.jsx
  const [searchItem, setSearchItem] = useState("");

  // --- FILTER COURSES HERE IN COURSES.JSX ---
  const filteredCourses = courses.filter((course) => {
    if (!searchItem.trim()) {
      return true; // If search input is empty, return all data
    }

    const lowerCaseSearchItem = searchItem.toLowerCase();

    // Define which keys to search within for course objects
    return ["name", "teacher", "description"].some((key) => {
      const value = course[key];
      if (value && typeof value === "string") {
        return value.toLowerCase().includes(lowerCaseSearchItem);
      }
      return false;
    });
  });

  return (
    <>
      <h1 className="mb-4">Våra Kurser</h1>

      {/* Use the SearchFilter component as a pure input controller */}
      <SearchFilter
        placeholderText="Sök kurs efter namn, lärare eller beskrivning..."
        searchItem={searchItem} // Pass the searchItem state
        setSearchItem={setSearchItem} // Pass the setter function
      >
        {/* The children function now wraps the content that follows the search input.
            It no longer receives filtered data from SearchFilter.
        */}
        {() => (
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
        )}
      </SearchFilter>
    </>
  );
}