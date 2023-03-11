import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { Form } from "react-router-dom";

export const ContactsPage = () => {
  return (
    <>
        <Form />
        <Filter />
        <ContactsList />
    </>
  );
};

