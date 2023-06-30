import handleInput from "./handlers/handleInput.js";
import { copyClipBoard } from "./handlers/onCopy.js";
const inputField = document.querySelector("#userInput");
const result = document.querySelector("#result");
const toggleBtn = document.querySelector("#toggle");
const copyBtn = document.querySelector("#copy-btn");

//mode decides if input should be encrypted or decrypted
let mode = "encrypt";

// Listen to the user input and proceed to translation
inputField.addEventListener("input", (event) => handleInput(event, mode));

// Copy results on click
copyBtn.addEventListener("click", copyClipBoard);

// Switch label of the input and result field
toggleBtn.addEventListener("click", () => {
  const inputLabel = document.querySelector(".input-label");
  const resultLabel = document.querySelector(".result-label");
  if (mode === "encrypt") {
    mode = "decrypt";
    inputField.placeholder = "Paste Encrypted Message";
    inputLabel.innerHTML = "Encrypted Text";
    resultLabel.innerHTML = "Normal Text";
  } else {
    mode = "encrypt";
    inputField.placeholder = "Type Your Message";
    inputLabel.innerHTML = "Normal Text";
    resultLabel.innerHTML = "Encrypted Text";
  }

  inputField.value = "";
  result.innerHTML = "";
});
