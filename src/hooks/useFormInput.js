import { useState } from 'react';

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value); // Handles input change events
  };
  const reset = () => {
    setValue(initialValue); // Resets value to its initial state
  };
  return {
    value,
    onChange: handleChange, // Exposes onChange directly for input components
    reset,
    setValue // Also exposes setValue directly, which can be useful for programmatic updates
  };
};
