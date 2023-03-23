export const toggleDisableBtn = (btnID, disable = true) => {
  document.querySelector(`button#${btnID}`).disabled = disable;
};
