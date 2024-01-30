import React from "react";
import { logInThunk } from "../../redux/Auth/operations";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    dispatch(
      logInThunk({
        email: emailInput.value,
        password: passwordInput.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <TextField
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        sx={{
          width: "530px",
          display: "flex",
          margin: "25px auto",
        }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        sx={{
          width: "530px",
          display: "flex",
          margin: "25px auto",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "170px",
          height: "40px",
          margin: "25px auto",
          display: "flex",
        }}
      >
        Log In
      </Button>
    </form>
  );
};
