import * as converter from "../converter/index.js";

export const messageOnSubmitListener = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea").value;
  const encodedMessage = converter.encodeMessage(input);
  document.querySelector("#result").innerText = encodedMessage;
  event.target.reset();
  document.querySelector("#copy-btn").disabled = false;
};

export const decodeOnSubmitListener = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea").value;
  const decodedMessage = converter.decodeMessage(input);
  document.querySelector("#result").innerText = decodedMessage;
};

export const cipherOnSubmit = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea");
  const encodedMessage = converter.encrypt(input.value);
  document.querySelector("#result").innerText = encodedMessage;
  event.target.reset();

  document.querySelector("#copy-btn").disabled = false;
};
export const decryptOnSubmit = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea#decrypt-input").value;
  const decodedMessage = converter.decrypt(input);
  document.querySelector("#result").innerText = decodedMessage;
};
