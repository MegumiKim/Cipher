export const sanitizeInput = (input) => {
  try {
    return String(input);
  } catch (e) {
    throw new Error(e);
  }
};
