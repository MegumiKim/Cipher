export const copyClipBoard = async () => {
  const copyText = document.querySelector("#result").innerText;
  const copyBtn = document.querySelector("#copy-btn");
  navigator.clipboard.writeText(copyText);
  copyBtn.innerText = "Copied!";
};
