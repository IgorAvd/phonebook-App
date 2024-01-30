import React from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { useEffect } from "react";
import { getContactsThunk } from "../redux/Contacts/operations";
import { selectIsError } from "../redux/Contacts/selector";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { useAppDispatch, useAppSelector } from "../hooks";

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectIsError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  if (error) {
    toast.error("Failed to get contacts", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
