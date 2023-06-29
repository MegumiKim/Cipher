import handleInput from "./listeners/handleInput.js";
import { copyClipBoard } from "./listeners/onCopy.js";
const inputField = document.querySelector("#userInput");
const result = document.querySelector("#result");
let mode = "Encrypt";

inputField.addEventListener("input", (event) => handleInput(event, mode));

const toggleBtn = document.querySelector("#toggle");
const inputLabel = document.querySelector(".input-label");
const resultLabel = document.querySelector(".result-label");

toggleBtn.addEventListener("click", () => {
  if (mode === "Encrypt") {
    mode = "Decrypt";
    inputField.placeholder = "Paste Encrypted Message";
    inputLabel.innerHTML = "Encrypted Text";
    resultLabel.innerHTML = "Normal Text";
  } else {
    mode = "Encrypt";
    inputField.placeholder = "Type Your Message";
    inputLabel.innerHTML = "Normal Text";
    resultLabel.innerHTML = "Encrypted Text";
  }

  inputField.value = "";
  result.innerHTML = "";
});

const copyBtn = document.querySelector("#copy-btn");
copyBtn.addEventListener("click", copyClipBoard);
