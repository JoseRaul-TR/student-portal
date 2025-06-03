import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registeredCourses, setRegisteredCourses] = useState([]);

    const registerStudent = (studentName, studentEmail, courseId, courseName) => {
        setRegisteredCourses(prevCourses => [...prevCourses, { studentName, studentEmail, courseId}]);
        alert(`Du har registrerat dig för kursen: ${courseName}`);
        console.log('Registered courses: ', registeredCourses);
    };

    return (
        <RegistrationContext.Provider value={{ registeredCourses, registerStudent }}>
            {children}
        </RegistrationContext.Provider>
    );
}