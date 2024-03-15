import { lazy, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { PublicRoute } from "./components/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import { fetchCurrentUser } from "../src/redux/Auth/operations";
import { isRefreshing } from "../src/redux/Auth/selectors";
import { useAppDispatch, useAppSelector } from "./hooks";
const HomePage = lazy(() => import("../src/pages/HomePage"));
const RegisterPage = lazy(() => import("../src/pages/RegisterPage"));
const LoginPage = lazy(() => import("../src/pages/LoginPage"));
const ContactsPage = lazy(() => import("../src/pages/ContactsPage"));

export const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshingUser = useAppSelector(isRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
