import { onFocus } from "../listeners/onFocus.js";
import * as listeners from "../listeners/onSubmit.js";
import { copyClipBoard } from "../tools/copyClipboard.js";

export const cipherForm = () => {
  return document
    .querySelector("#encrypt-form")
    .addEventListener("submit", (event) => listeners.cipherOnSubmit(event));
};

export const decryptForm = () => {
  return document
    .querySelector("#decrypt-form")
    .addEventListener("submit", (event) => listeners.decryptOnSubmit(event));
};

export const encryptInput = () => {
  return document
    .querySelector("textarea#encrypt-input")
    .addEventListener("focus", (event) => onFocus(event, "Encrypt"));
};

export const decryptInput = () => {
  return document
    .querySelector("textarea#decrypt-input")
    .addEventListener("focus", (event) => onFocus(event, "Decrypt"));
};

export const copyBtn = () => {
  return document
    .querySelector(".copy-btn")
    .addEventListener("click", copyClipBoard);
};
