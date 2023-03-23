export const onFocus = (event, state) => {
  const submitBtn = document.querySelector(`#${state}-btn`);
  const userAlert = document.querySelector(".user-alert");
  const inputs = document.querySelectorAll("textarea");

  submitBtn.innerText = state;
  submitBtn.disabled = false;

  inputs.forEach((input) => {
    input.value = "";
  });
  userAlert.style.display = "none";
};
