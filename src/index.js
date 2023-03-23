import { decryptionSetup } from "./setup/decryption.js";
import { encryptionSetup } from "./setup/encryption.js";

const routerSwitch = () => {
  const pageID = document.body.id;
  switch (pageID) {
    case "cipher":
      encryptionSetup();
      decryptionSetup();
      break;
  }
};

routerSwitch();
