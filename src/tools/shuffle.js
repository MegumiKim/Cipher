const shuffle = (alphabet) =>
  [...alphabet].sort(() => Math.random() - 0.5).join("");
