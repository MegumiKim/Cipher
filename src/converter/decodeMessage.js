export const decodeMessage = (codedMessage) => {
  const listOfStrings = codedMessage.split("-");

  let listOfCodes = [];
  listOfStrings.forEach((num) => {
    let char = String.fromCharCode(parseInt(num));

    listOfCodes.push(char);
  });

  const decodedMessage = listOfCodes.join("");
  return decodedMessage;
};
