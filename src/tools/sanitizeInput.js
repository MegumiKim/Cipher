export const sanitizeInput = (input) => {
  try {
    return input.toString();
  } catch (e) {
    throw new Error(e);
  }
};
