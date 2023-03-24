import * as listeners from "../listeners/onClick.js";

export const decryptionSetup = () => {
  const input = document.querySelector("textarea#decrypt-input");
  const submit = document.querySelector("#decrypt-btn");

  submit.addEventListener("click", (event) => listeners.decryptOnClick(event));

  input.addEventListener("keyup", (event) => {
    listeners.decryptOnPaste(event);
  });

  input.addEventListener("paste", (event) => {
    listeners.decryptOnPaste(event);
  });
};
