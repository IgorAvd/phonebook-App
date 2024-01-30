import React from "react";
import { getIsLoggedIn, getUser } from "../redux/Auth/selectors";
import { Typography } from "@mui/material";
import { useAppSelector } from "../hooks";

const HomePage = () => {
  const user = useAppSelector(getUser);
  const IsLoggedIn = useAppSelector(getIsLoggedIn);
  return (
    <div>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "40px", marginTop: "100px", textAlign: "center" }}
      >
        {IsLoggedIn ? (
          <>
            Hello, {user}! <br />
            Welcome to the Phonebook App
          </>
        ) : (
          <>
            Hello, guest! <br />
            Welcome to the Phonebook App
          </>
        )}
      </Typography>
    </div>
  );
};

export default HomePage;
