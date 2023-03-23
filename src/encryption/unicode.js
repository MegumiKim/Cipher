export const encodeMessage = (message) => {
  const listOfLetters = [...message];

  const cipher_codes = [];
  listOfLetters.forEach((letter) => {
    cipher_codes.push(letter.charCodeAt(0));
  });

  return cipher_codes.toString().replaceAll(",", "-");
};

export const decodeMessage = (codedMessage) => {
  const listOfStrings = codedMessage.split("-");

  let listOfCodes = [];
  listOfStrings.forEach((num) => {
    let int = parseInt(num);
    let char = String.fromCharCode(int);

    listOfCodes.push(char);
  });
  const decodedMessage = listOfCodes.join("");

  if (decodedMessage.length >= 2) {
    return decodedMessage;
  } else {
    console.log(decodedMessage.length);
    return "Error in input";
  }
};
