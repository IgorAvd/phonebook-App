import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { removeContactsThunk } from "../../redux/Contacts/operations";
import { useState } from "react";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { notifySuccess } from "../../Helpers/ToastNotification";
import { ThreeCirclesComp } from "../../Helpers/ThreeCircles";
import { BtnStyle } from "./ContactList.styled";

type ContactItemDeleteBtnProps = {
  id: string;
};

export const ContactItemDeleteBtn: React.FC<ContactItemDeleteBtnProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);

  const handleDelete = async () => {
    setIsLoadingRemove(true);
    try {
      await dispatch(removeContactsThunk(id));
      notifySuccess("Contact is removed!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingRemove(false);
    }
  };
  return (
    <Button
      type="submit"
      onClick={handleDelete}
      disabled={isLoadingRemove}
      variant="contained"
      sx={BtnStyle}
    >
      {isLoadingRemove ? <ThreeCirclesComp /> : "Delete"}
    </Button>
  );
};
