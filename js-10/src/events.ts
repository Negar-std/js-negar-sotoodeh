import {contactListDrawer, contactNameInput, phoneNumberInput, deviceStorageInput, contactListElement,} from "./importer.js"
import {ContactProps} from "./types";
import {contactList} from "./state.js"

export const showContactsDrawerHandler = () => {
    contactListDrawer?.classList.remove("bottom-[-50%]");
    contactListDrawer?.classList.add("bottom-[0%]");
}

export const closeContactsDrawerHandler = () => {
    contactListDrawer?.classList.add("bottom-[-100%]");
    contactListDrawer?.classList.remove("bottom-[0%]");
}

export const handelCreateContact = () => {
    
    const newContact: ContactProps = {
        id: crypto.randomUUID(),
        contactName: contactNameInput?.value ?? "",
        phoneNumber: phoneNumberInput?.value ?? "",
        storage: deviceStorageInput?.checked ? "Device" : "SIM",
    };
    contactList.push(newContact);

    const listItem = document.createElement("li");
    listItem.className = "py-4 px-1 bg-slate-100 rounded-lg"
    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-900"
    contactNameElement.innerText = newContact.contactName;
    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.className = "text-slate-700"
    phoneNumberElement.innerText = newContact.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(phoneNumberElement);
    contactListElement?.appendChild(listItem);
}