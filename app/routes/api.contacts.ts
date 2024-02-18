import { getAllContacts } from "./contacts.server";

import { LoaderFunctionArgs, json } from "@remix-run/node";

export const loader = async ({
    params,
  }: LoaderFunctionArgs) => {
    let contacts = await getAllContacts();
    return json({ contacts });
  };
