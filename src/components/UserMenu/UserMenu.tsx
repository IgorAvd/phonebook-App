import React from "react";
import { getUser } from "../../redux/Auth/selectors";
import { logOutThunk } from "../../redux/Auth/operations";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const UserMenu = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Hello, {user}</p>
      <Button
        color="inherit"
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </Button>
    </div>
  );
};
