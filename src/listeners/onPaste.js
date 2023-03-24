const encryptBtn = document.querySelector("#encrypt-btn");
const copyBtn = document.querySelector("#copy-btn");
const decryptInput = document.querySelector("textarea#decrypt-input");
const decryptBtn = document.querySelector("button#decrypt-btn");
const userAlert = document.querySelector(".user-alert");

export const encryptOnPaste = (event) => {
  if (event.target.value.length > 1) {
    copyBtn.disabled = true;
    userAlert.style.display = "none";

    encryptBtn.disabled = false;
    encryptBtn.innerHTML = 'Encrypt <i class="fa-solid fa-key"></i>';

    decryptInput.value = "";
    decryptBtn.innerHTML = 'Decrypt <i class="fa-solid fa-unlock-keyhole"></i>';
  } else {
    encryptBtn.disabled = true;
  }
};

export const decryptOnPaste = (event) => {
  decryptBtn.disabled = false;
};
