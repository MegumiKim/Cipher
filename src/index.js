import * as ui from "./ui/ui.js";

const routerSwitch = () => {
  const pageID = document.body.id;
  switch (pageID) {
    case "cipher":
      ui.cipherForm();
      ui.decryptForm();
      ui.encryptInput();
      ui.decryptInput();
      ui.copyBtn();
      break;
  }
};

routerSwitch();
