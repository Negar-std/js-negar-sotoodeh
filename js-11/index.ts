import {closeDrawerButton,showContactsButton,submitButton} from "./src/importer.js"
import {closeContactsDrawerHandler,handleCreateContact,showContactsDrawerHandler} from "./src/events.js"

showContactsButton?.addEventListener("click", showContactsDrawerHandler);

closeDrawerButton?.addEventListener("click", closeContactsDrawerHandler);

submitButton?.addEventListener("click", handleCreateContact);
