import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { linkStyles } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLink to="/register" style={linkStyles}>
            Register
          </NavLink>

          <NavLink to="/login" style={linkStyles}>
            Log In
          </NavLink>
        </div>
      </Typography>
    </div>
  );
};
