export const sanitizeInput = (input) => {
  try {
    return input;
  } catch (e) {
    throw new Error(e);
  }
};
