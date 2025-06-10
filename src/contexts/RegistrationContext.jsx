import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const RegistrationContext = createContext();

const LOCAL_STORAGE_KEY = "registeredCourses";
// Create the provider component
export const RegistrationProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    try{
      // Lazy initialization from localStorage
    const savedCourses = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCourses ? JSON.parse(savedCourses) : [];
    } catch (error) {
      console.error("Error loading registered courses from localStorage:", error);
      // If data is corrupted, remove it and return an empty array
      localStorage.removeItem(LOCAL_STORAGE_KEY); 
      return [];
    }
  });

  // Save to localStorage whenever registeredCourses changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(registeredCourses));
    } catch (error) {
      console.error("Error saving registered courses to localStorage:", error);
    }
  }, [registeredCourses]); // Dependency array ensures effect runs only when registeredCourses changes

  // Function to add a new registration
  const registerStudent = (studentName, studentEmail, courseId, courseName) => {
    const registrationTime = new Date().toISOString(); // ISO string for consistent storage
    const newRegistration = {
      id: Date.now().toString(), // Use Date.now() for unique ID, converted to string
      studentName,
      studentEmail,
      courseId,
      courseName,
      registrationTime,
    };
    setRegisteredCourses((prevCourses) => [...prevCourses, newRegistration]);
  };

  const value = {
    registeredCourses,
    registerStudent,
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};