let alphabet = __ALPHABETS__;
let shift = __SHIFT_KEY__;

alphabet = alphabet.split("");

const cipherAlphabet = alphabet.map((_symbol, index) => {
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
});

export const encrypt = (message) => {
  const listOfLetters = message.split("");
  let translation = "";

  listOfLetters.forEach((letter) => {
    const index = alphabet.indexOf(letter);
    if (index === -1) {
      translation += "&";
    } else {
      translation += cipherAlphabet[index];
    }
  });
  return translation;
};

export const decrypt = (message) => {
  const listOfLetters = message.split("");
  let translation = "";

  listOfLetters.forEach((letter) => {
    const index = cipherAlphabet.indexOf(letter);
    if (index === -1) {
      translation += " ";
    } else {
      translation += alphabet[index];
    }
  });
  return translation;
};
