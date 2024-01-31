import { getUser } from "../redux/Auth/selectors";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PublicRoute = ({ children }: Props) => {
  const location = useLocation();
  const user = useAppSelector(getUser);
  return !user ? (
    <>{children}</>
  ) : (
    <Navigate to={location.state ? location.state : "/"} />
  );
};
