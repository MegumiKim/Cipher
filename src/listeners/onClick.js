import * as encryption from "../encryption/caesarCipher.js";
import { sanitizeInput } from "../tools/sanitizeInput.js";
import { toggleDisableBtn } from "../tools/toggleDisable.js";

export const encryptOnClick = (event) => {
  const input = document.querySelector("textarea#encrypt-input");
  const cleanInput = sanitizeInput(input.value);
  const encryptedMessage = encryption.encrypt(cleanInput);
  input.value = encryptedMessage;
  event.target.innerText = "Encrypted!";
  toggleDisableBtn("copy-btn", false);
  toggleDisableBtn("encrypt-btn", true);
};

export const decryptOnClick = (event) => {
  const input = document.querySelector("textarea#decrypt-input");
  const cleanInput = sanitizeInput(input.value);
  const decryptedMessage = encryption.decrypt(cleanInput);
  input.value = decryptedMessage;
  event.target.innerText = "Decrypted!";
  event.target.disabled = true;
};
