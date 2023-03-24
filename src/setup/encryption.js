import * as listeners from "../listeners/index.js";

export const encryptionSetup = () => {
  const input = document.querySelector("textarea#encrypt-input");
  const encryptBtn = document.querySelector("#encrypt-btn");
  const copyBtn = document.querySelector("#copy-btn");
  const eraseBtn = document.querySelector("#erase-btn");

  input.value = "";

  encryptBtn.addEventListener("click", (event) =>
    listeners.encryptOnClick(event)
  );
  eraseBtn.addEventListener("click", () => {
    input.value = "";
  });
  copyBtn.addEventListener("click", listeners.copyClipBoard);

  input.addEventListener("keyup", (event) => {
    listeners.encryptOnPaste(event);
  });
  input.addEventListener("paste", (event) => {
    listeners.encryptOnPaste(event);
  });
};
