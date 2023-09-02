import {contactInfoType} from "./types";

export const createListItem = (contactInfo: contactInfoType): HTMLLIElement => {
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-1 bg-slate-100 rounded-lg"
    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-900"
    contactNameElement.innerText = contactInfo.contactName;
    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.className = "text-slate-700"
    phoneNumberElement.innerText = contactInfo.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(phoneNumberElement);
    return listItem;
}

export const validateFiels = (...fields: string[]): boolean => {
    return fields.every((field) => !!field.toString());
};