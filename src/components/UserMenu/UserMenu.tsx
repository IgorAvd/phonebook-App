import { getUser } from "../../redux/Auth/selectors";
import { logOutThunk } from "../../redux/Auth/operations";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { UserGreetings } from "./UserMenu.styled";

export const UserMenu = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  return (
    <div>
      <UserGreetings>Hello, {user}</UserGreetings>
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
