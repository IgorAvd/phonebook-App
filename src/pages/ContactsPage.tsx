import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { useEffect } from "react";
import { getContactsThunk } from "../redux/Contacts/operations";
import { selectIsError } from "../redux/Contacts/selector";
import { Typography } from "@mui/material";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { useAppDispatch, useAppSelector } from "../hooks";
import { notifyError } from "../Helpers/ToastNotification";

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectIsError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  if (error) {
    notifyError("Failed to get contacts");
  }

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "40px", marginTop: "100px", textAlign: "center" }}
      >
        Phonebook
      </Typography>

      <ContactForm />
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: "36px", marginTop: "40px", textAlign: "center" }}
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
