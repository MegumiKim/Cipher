import * as listeners from "../listeners/onSubmit.js";
import { copyClipBoard } from "../tools/copyClipboard.js";
export const encodeForm = () => {
  return document
    .querySelector("#message_form")
    .addEventListener("submit", (event) =>
      listeners.messageOnSubmitListener(event)
    );
};

export const decodeForm = () => {
  return document
    .querySelector("#decode-form")
    .addEventListener("submit", (event) =>
      listeners.decodeOnSubmitListener(event)
    );
};

export const cipherForm = () => {
  return document
    .querySelector("#cipher-form")
    .addEventListener("submit", (event) => listeners.cipherOnSubmit(event));
};

export const decryptForm = () => {
  return document
    .querySelector("#decrypt-form")
    .addEventListener("submit", (event) => listeners.decryptOnSubmit(event));
};

export const copyBtn = () => {
  return document
    .querySelector("#copy-btn")
    .addEventListener("click", copyClipBoard);
};
