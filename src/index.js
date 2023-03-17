import { decodeMessage } from "./converter/decodeMessage.js";
import { encodeMessage } from "./converter/encodeMessage.js";
import { messageOnSubmitListener } from "./listeners/onSubmit.js";

encodeMessage("Hello");
decodeMessage("104,101,108,108,111,32,49,50,51,33");

document
  .querySelector("#message_form")
  .addEventListener("submit", (event) => messageOnSubmitListener(event));
