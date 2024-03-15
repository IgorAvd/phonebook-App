import React from "react";
import { logInThunk } from "../../redux/Auth/operations";
import { Button, TextField, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { BtnStyle, TextFieldStyle } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 960px)");
  const isDesktop = useMediaQuery("(min-width: 961px)");
  const adaptiveLoginForm = isDesktop ? "700px" : isTablet ? "500px" : "300px";

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
    <form
      onSubmit={handleSubmit}
      style={{ width: adaptiveLoginForm, margin: "0 auto" }}
      autoComplete="on"
    >
      <TextField
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        sx={TextFieldStyle}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        sx={TextFieldStyle}
      />
      <Button type="submit" variant="contained" sx={BtnStyle}>
        Log In
      </Button>
    </form>
  );
};
