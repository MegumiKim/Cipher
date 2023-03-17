import * as converter from "../converter/index.js";

export const messageOnSubmitListener = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea").value;
  const encodedMessage = converter.encodeMessage(input);
  document.querySelector("#result").innerText = encodedMessage;
  document.querySelector("#copy-btn").style.display = "block";
};

export const decodeOnSubmitListener = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea").value;
  const decodedMessage = converter.decodeMessage(input);
  document.querySelector("#result").innerText = decodedMessage;
};
