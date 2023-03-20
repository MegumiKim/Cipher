import * as converter from "../converter/index.js";
import { sanitizeInput } from "../tools/sanitizeInput.js";

export const messageOnSubmitListener = (event) => {
  event.preventDefault();
  const rawInput = document.querySelector("textarea").value;
  const cleanInput = sanitizeInput(rawInput);
  const encodedMessage = converter.encodeMessage(cleanInput);
  document.querySelector("#result").innerText = encodedMessage;
  event.target.reset();
  document.querySelector("#copy-btn").disabled = false;
};

export const decodeOnSubmitListener = (event) => {
  event.preventDefault();
  const rawInput = document.querySelector("textarea").value;
  const cleanInput = sanitizeInput(rawInput);
  const decodedMessage = converter.decodeMessage(cleanInput);
  document.querySelector("#result").innerText = decodedMessage;
};

export const cipherOnSubmit = (event) => {
  event.preventDefault();
  const rawInput = document.querySelector("textarea").value;
  const cleanInput = sanitizeInput(rawInput);
  const encodedMessage = converter.encrypt(cleanInput);
  document.querySelector("#result").innerText = encodedMessage;
  event.target.reset();
  document.querySelector("#copy-btn").disabled = false;
};

export const decryptOnSubmit = (event) => {
  event.preventDefault();
  const rawInput = document.querySelector("textarea#decrypt-input").value;
  const cleanInput = sanitizeInput(rawInput);
  const decodedMessage = converter.decrypt(cleanInput);
  document.querySelector("#result").innerText = decodedMessage;
};
