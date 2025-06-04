import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const RegistrationContext = createContext();

// Create the provider component
export const RegistrationProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    // Try to load from localStorage on initial render
    const savedCourses = localStorage.getItem('registeredCourses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  // Save to localStorage whenever registeredCourses changes
  useEffect(() => {
    localStorage.setItem('registeredCourses', JSON.stringify(registeredCourses));
  }, [registeredCourses]);

  // Function to add a new registration
  const registerStudent = (name, email, courseId, courseName) => {
    const newRegistration = {
      id: Date.now().toString(), // Unique ID for the registration
      studentName: name,
      studentEmail: email,
      courseId: courseId,
      courseName: courseName,
      registrationDate: new Date().toLocaleDateString('sv-SE'),
    };
    setRegisteredCourses((prevCourses) => [...prevCourses, newRegistration]);
  };

  return (
    <RegistrationContext.Provider value={{ registeredCourses, registerStudent }}>
      {children}
    </RegistrationContext.Provider>
  );
};