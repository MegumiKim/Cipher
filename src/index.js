import * as listeners from "./listeners/onSubmit.js";
import { copyClipBoard } from "./tools/copyClipboard.js";

const routerSwitch = () => {
  const pageID = document.body.id;
  switch (pageID) {
    case "encode":
      document
        .querySelector("#message_form")
        .addEventListener("submit", (event) =>
          listeners.messageOnSubmitListener(event)
        );

      document
        .querySelector("#copy-btn")
        .addEventListener("click", copyClipBoard);

      break;

    case "decode":
      document
        .querySelector("#decode-form")
        .addEventListener("submit", (event) =>
          listeners.decodeOnSubmitListener(event)
        );
  }
};

routerSwitch();
