import {ContactProps} from "./types"
import {contactList} from "./state.js"
import {contactListDrawer,contactListElement,contactNameInput,deviceStorageInput,phoneNumberInput} from "./importer.js"
import {createListItem, validateCreateContact} from "./function.js"

export const showContactsDrawerHandler = () =>  {
    contactListDrawer?.classList.remove("bottom-[-50%]");
    contactListDrawer?.classList.add("bottom-[0%]");
};

export const closeContactsDrawerHandler = () => {
    contactListDrawer?.classList.add("bottom-[-100%]");
    contactListDrawer?.classList.remove("bottom-[0%]");
};

export const handleCreateContact = () => {

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
};
