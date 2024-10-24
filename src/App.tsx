import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Home from "./components/home/Home";
import AuthPage from "./components/auth/AuthPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
