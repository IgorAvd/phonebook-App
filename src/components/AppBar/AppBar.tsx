import React from "react";
import { getIsLoggedIn } from "../../redux/Auth/selectors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAppSelector } from "../../hooks";

export const AppBarComponent: React.FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Navigation />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "right" }}
            >
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
