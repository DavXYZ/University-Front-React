// src/validation/validators/phoneValidator.js
export const validatePhone = (value) => {
    if (!value) return true; // optional field
    return /^\+374[0-9]{8}$/.test(value);
  };