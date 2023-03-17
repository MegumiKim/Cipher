export const encodeMessage = (message) => {
  const listOfLetters = [...message];

  const cipher_codes = [];
  listOfLetters.forEach((letter) => {
    cipher_codes.push(letter.charCodeAt(0));
  });

  return cipher_codes.toString().replaceAll(",", "-");
};
