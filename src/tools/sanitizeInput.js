// Needs to expand measures to sanitize input for security
export const sanitizeInput = (input) => {
  try {
    return input.toString();
  } catch (e) {
    console.warn(e);
    throw new Error(e);
  }
};
