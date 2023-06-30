import { decrypt, encrypt } from "../encryption/caesarCipher.js";
import { debounce } from "../tools/debounce.js";
import { sanitizeInput } from "../tools/sanitizeInput.js";
const resultsDisplay = document.querySelector("#result");

const handleInput = debounce((event, mode) => {
  let cleanInput = sanitizeInput(event.target.value);

  if (mode === "encrypt") {
    const encryptedMessage = encrypt(cleanInput);
    resultsDisplay.innerHTML = encryptedMessage;
  } else {
    try {
      const decryptedMessage = decrypt(cleanInput);
      resultsDisplay.innerHTML = decryptedMessage;
    } catch {
      resultsDisplay.innerHTML =
        "Error in input :( Please make sure to paste an encrypted message.";
    }
  }
}, 500);

export default handleInput;
