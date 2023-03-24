import * as listeners from "../listeners/index.js";

export const encryptionSetup = () => {
  const input = document.querySelector("textarea#encrypt-input");
  const encryptBtn = document.querySelector("#encrypt-btn");
  const copyBtn = document.querySelector("#copy-btn");
  const decryptInput = document.querySelector("textarea#decrypt-input");
  const decryptBtn = document.querySelector("button#decrypt-btn");
  const userAlert = document.querySelector(".user-alert");
  const eraseBtn = document.querySelector("#erase-btn");

  input.value = "";

  encryptBtn.addEventListener("click", (event) =>
    listeners.encryptOnClick(event)
  );
  eraseBtn.addEventListener("click", () => {
    input.value = "";
  });
  copyBtn.addEventListener("click", listeners.copyClipBoard);

  input.addEventListener("keyup", () => {
    if (input.value.length > 1) {
      copyBtn.disabled = true;
      userAlert.style.display = "none";

      encryptBtn.disabled = false;
      encryptBtn.innerHTML = 'Encrypt <i class="fa-solid fa-key"></i>';

      decryptInput.value = "";
      decryptBtn.innerHTML =
        'Decrypt <i class="fa-solid fa-unlock-keyhole"></i>';
    } else {
      encryptBtn.disabled = true;
    }
  });
};
