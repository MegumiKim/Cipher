export const copyClipBoard = async () => {
  const input = document.querySelector("#result");
  const userAlert = document.querySelector(".user-alert");
  navigator.clipboard.writeText(input.innerHTML);
  userAlert.style.display = "block";
  setTimeout(() => {
    userAlert.style.display = "none";
  }, 2000);

  input.value = "";
};
