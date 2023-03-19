let alphabet = __ALPHABETS__;
let shift = __SHIFT_KEY__;

// let alphabet =
//   "îéd8tc4Fô6ÙOÎÈaGè7bÛûPBùÉq0êArD9çÊ.ŒsNÜ/LRK!üHEMgC'wQ|ẞÔ 5ËIxJœëuÇplUY_Å3ÀizÆS1nøñmoàZåWjævV&y-k?#áhX Ø$fTe:2@";
// let shift = 25;
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
