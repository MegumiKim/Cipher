import * as ui from "./ui/ui.js";

const routerSwitch = () => {
  const pageID = document.body.id;
  switch (pageID) {
    case "encode":
      ui.encodeForm();
      ui.copyBtn();
      break;

    case "decode":
      ui.decodeForm();
      break;

    case "cipher":
      ui.cipherForm();
      ui.copyBtn();
      break;

    case "decrypt":
      ui.decryptForm();
      break;
  }
};

routerSwitch();
