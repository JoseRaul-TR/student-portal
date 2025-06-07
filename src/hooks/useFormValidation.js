import { useState } from 'react';

// Email address format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useFormValidation = (formInputs) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); // isValid state can be derived or used directly

  const validate = () => {
    let newErrors = {};
    let formIsValid = true;

    // Validate Name
    if (!formInputs.name.value.trim()) {
      newErrors.name = "Namn får inte vara tomt";
      formIsValid = false;
    }

    // Validate Email
    if (!formInputs.email.value.trim()) {
      newErrors.email = "Email får inte vara tomt";
      formIsValid = false;
    } else if (!emailRegex.test(formInputs.email.value)) {
      newErrors.email = "Vänligen ange en giltig email-adress";
      formIsValid = false;
    }

    // Validate Course
    if (!formInputs.selectedCourseId.value) {
      newErrors.selectedCourseId = "Välj en kurs";
      formIsValid = false;
    }

    setErrors(newErrors);
    setIsValid(formIsValid); // Update isValid state
    return formIsValid;
  };

  const resetErrors = () => {
    setErrors({});
    setIsValid(false); // Reset isValid when errors are cleared
  };

  return {
    errors,
    isValid,
    validate,
    resetErrors,
  };
};