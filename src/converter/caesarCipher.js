let alphabet =
  "céÙdÎaÈGôO8î4Ft67bèÛûPBù0ÉêqrA9D.NÜÊ/!HLMŒEsKçüR'gCw|ẞQÔË 5IxJœëUupÇYSÀ1WàvøVæåñ-?y#hXá f$ØTe2:@z3Ål&Æok_nmZij";
alphabet = alphabet.split("");
let shift = 25;

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

const shuffle = (alphabet) =>
  [...alphabet].sort(() => Math.random() - 0.5).join("");
console.log(shuffle(alphabet));
