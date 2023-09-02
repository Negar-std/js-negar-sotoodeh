import {contactListDrawer, contactNameInput, phoneNumberInput, deviceStorageInput, contactListElement,} from "./importer.js"
import {ContactProps, contactInfoType} from "./types";
import {contactList} from "./state.js"
import {createListItem, validateFiels} from "./function.js"


export const showContactsDrawerHandler = () => {
    contactListDrawer?.classList.remove("bottom-[-50%]");
    contactListDrawer?.classList.add("bottom-[0%]");
}

export const closeContactsDrawerHandler = () => {
    contactListDrawer?.classList.add("bottom-[-100%]");
    contactListDrawer?.classList.remove("bottom-[0%]");
}




const validateCreateContact = (contactInfo: contactInfoType) => {
    console.log(contactInfo);
    if (!validateFiels(contactInfo.contactName, contactInfo.phoneNumber + "")) {
        alert("fill all fields!");
        throw Error("fill all fields!");
    }
};


export const handleCreateContact = () => {
    console.log("handleCreateContact function called");
    validateCreateContact({
        contactName: contactNameInput!.value,
        phoneNumber: phoneNumberInput!.value
    });
    
    const newContact: ContactProps = {
        id: crypto.randomUUID(),
        contactName: contactNameInput?.value ?? "",
        phoneNumber: phoneNumberInput?.value ?? "",
        storage: deviceStorageInput?.checked ? "Device" : "SIM",
    };
    contactList.push(newContact);

    const listItem = createListItem({
        contactName:newContact.contactName,
        phoneNumber:newContact.phoneNumber,
    });
    contactListElement?.appendChild(listItem);
}