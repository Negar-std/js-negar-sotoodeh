export type ContactProps = {
    id: string;
    contactName: string;
    phoneNumber: string | number;
    storage: "SIM" | "Device";

}

export type contactInfoType = {
    contactName : string;
    phoneNumber : string | number;
}

export type ContactsListType = ContactProps[];