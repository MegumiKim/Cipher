import * as encryption from "../encryption/caesarCipher.js";
import { sanitizeInput } from "../tools/sanitizeInput.js";

export const cipherOnSubmit = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea#encrypt-input");
  const cleanInput = sanitizeInput(input.value);
  const encryptedMessage = encryption.encrypt(cleanInput);
  input.value = encryptedMessage;

  const submitBtn = document.querySelector("button#Encrypt-btn");
  submitBtn.innerText = "Encrypted!";
  submitBtn.disabled = true;
};

export const decryptOnSubmit = (event) => {
  event.preventDefault();
  const input = document.querySelector("textarea#decrypt-input");
  const cleanInput = sanitizeInput(input.value);
  const decryptedMessage = encryption.decrypt(cleanInput);
  input.value = decryptedMessage;

  const submitBtn = document.querySelector("button#Decrypt-btn");
  submitBtn.innerText = "Decrypted!";
  submitBtn.disabled = true;
};
