let alphabet = __ALPHABETS__;
let shift = __SHIFT_KEY__;

alphabet = alphabet.split("");

const cipherAlphabet = alphabet.map((_symbol, index) => {
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
});

export const encrypt = (message) => {
  const originalMessage = message.split("");
  return originalMessage
    .map((letter) => {
      const index = alphabet.indexOf(letter);
      const newLetter = cipherAlphabet[index];
      return newLetter;
    })
    .join("");
};

export const decrypt = (message) => {
  const originalMessage = message.split("");
  return originalMessage
    .map((letter) => {
      const index = cipherAlphabet.indexOf(letter);
      const newLetter = alphabet[index];
      return newLetter;
    })
    .join("");
};
