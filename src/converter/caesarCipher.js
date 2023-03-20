// let alphabet = __ALPHABETS__;
// let shift = __SHIFT_KEY__;

let shift = 25;

let alphabet =
  "7a;Eyd68ub39-c:eH. 0q_hfIK*%gn1@$JsDmoF4GLMt#25lNrOzPSpQåRwZUkÅijTXøCYvBxVWæ,ÆAØ@?!";
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
