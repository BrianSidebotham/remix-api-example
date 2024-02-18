import { getContacts } from "~/data";

export async function getAllContacts() {
    let contacts = await getContacts();
    return contacts;
}
