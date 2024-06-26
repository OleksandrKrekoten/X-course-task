import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const [isLoggedIn] = useContext(AuthContext);
  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
