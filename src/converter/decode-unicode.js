export const decodeMessage = (codedMessage) => {
  const listOfStrings = codedMessage.split("-");

  let listOfCodes = [];
  listOfStrings.forEach((num) => {
    let int = parseInt(num);
    let char = String.fromCharCode(int);

    listOfCodes.push(char);
  });
  const decodedMessage = listOfCodes.join("");

  if (decodedMessage.length > 2) {
    return decodedMessage;
  } else {
    return "Error in input";
  }
};
