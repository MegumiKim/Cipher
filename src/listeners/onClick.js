import * as encryption from "../encryption/caesarCipher.js";
import { sanitizeInput } from "../tools/sanitizeInput.js";
import { toggleDisableBtn } from "../tools/toggleDisable.js";

export const encryptOnClick = (event) => {
  const input = document.querySelector("textarea#encrypt-input");
  const cleanInput = sanitizeInput(input.value);
  const userAlert = document.querySelector(".user-alert");
  try {
    const encryptedMessage = encryption.encrypt(cleanInput);
    input.value = encryptedMessage;
    event.target.innerText = "Encrypted!";
    toggleDisableBtn("copy-btn", false);
  } catch (e) {
    userAlert.innerText =
      "Can't read some special characters in your message...";
    userAlert.style.display = "block";
  }

  toggleDisableBtn("encrypt-btn", true);
};

export const decryptOnClick = (event) => {
  const input = document.querySelector("textarea#decrypt-input");
  const cleanInput = sanitizeInput(input.value);

  try {
    const decryptedMessage = encryption.decrypt(cleanInput);
    input.value = decryptedMessage;
    event.target.innerText = "Decrypted!";
  } catch {
    input.value = "Error in input!";
  }

  event.target.disabled = true;
};
