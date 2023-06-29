// let alphabet = __ALPHABETS__ + "=";
let alphabet =
  "7a;Eyd68ub39-c:eH. 0q_hfIK*%gn1@$JsDmoF4GLMt#25lNrOzPSpQåRwZUkÅijTXøCYvBxVWæ,ÆAØ@?!";
// let shift = __SHIFT_KEY__;
let shift = 25;
alphabet = alphabet.split("");

const cipherAlphabet = alphabet.map((_symbol, index) => {
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
});

export const encrypt = (message) => {
  message = btoa(message).split("");

  return message
    .map((letter) => {
      const index = alphabet.indexOf(letter);
      const newLetter = cipherAlphabet[index];
      return newLetter;
    })
    .join("");
};

export const decrypt = (message) => {
  message = message.split("");
  if (message.length > 1) {
    const decrypted = message
      .map((letter) => {
        const index = cipherAlphabet.indexOf(letter);
        const newLetter = alphabet[index];
        return newLetter;
      })
      .join("");
    if (decrypted) {
      return atob(decrypted);
    }
    throw new Error();
  } else {
    return "";
  }
};
