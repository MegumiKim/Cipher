let alphabet = secrets.ALPHABETS;
let shift = secrets.SHIFT_KEY;

alphabet = alphabet.split("");

const cipherAlphabet = alphabet.map((_symbol, index) => {
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
});

const encrypt = (message) => {
  const originalMessage = message.split("");
  return originalMessage
    .map((letter) => {
      const index = alphabet.indexOf(letter);
      const newLetter = cipherAlphabet[index];
      return newLetter;
    })
    .join("");
};

const decrypt = (message) => {
  const originalMessage = message.split("");
  return originalMessage
    .map((letter) => {
      const index = cipherAlphabet.indexOf(letter);
      const newLetter = alphabet[index];
      return newLetter;
    })
    .join("");
};

const shuffle = (alphabet) =>
  [...alphabet].sort(() => Math.random() - 0.5).join("");
console.log(shuffle(alphabet));
