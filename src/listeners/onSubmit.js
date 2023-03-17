import { encodeMessage } from "../converter/encodeMessage.js";

export const messageOnSubmitListener = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea").value;
  const encodedMessage = encodeMessage(input);
  document.querySelector("#result").innerText = encodedMessage;
};
