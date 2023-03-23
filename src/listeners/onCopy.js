export const copyClipBoard = async () => {
  const input = document.querySelector("textarea#encrypt-input");
  const userAlert = document.querySelector(".user-alert");
  navigator.clipboard.writeText(input.value);
  userAlert.style.display = "block";
  input.value = "";
};
