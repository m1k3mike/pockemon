import * as React from "react";
import { useLocation } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Home from "../home/Home";
const AuthPage = () => {
  const location = useLocation();
  return location.pathname === "/login" ? (
    <Login />
  ) : location.pathname === "/register" ? (
    <Register />
  ) : (
    <Home />
  );
};

export default AuthPage;