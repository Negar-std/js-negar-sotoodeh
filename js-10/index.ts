import {showContactsButton, closeDrawerButton, submitButton, } from "./src/importer.js";
import {showContactsDrawerHandler, closeContactsDrawerHandler, handelCreateContact} from "./src/events.js"


showContactsButton?.addEventListener("click", showContactsDrawerHandler);

closeDrawerButton?.addEventListener("click", closeContactsDrawerHandler);

submitButton?.addEventListener("click", handelCreateContact);
