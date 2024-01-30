import React from "react";
import { registerThunk } from "../../redux/Auth/operations";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    dispatch(
      registerThunk({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        type="text"
        name="name"
        variant="outlined"
        sx={{
          width: "530px",
          display: "flex",
          margin: "25px auto",
        }}
      />
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
        Register
      </Button>
    </form>
  );
};
