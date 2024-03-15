import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NavLinkStyle } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLink to="/" style={NavLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/contacts" style={NavLinkStyle}>
            Contacts
          </NavLink>
        </div>
      </Typography>
    </nav>
  );
};
