import * as React from "react";
import LoginInput from "../../../UI/LoginInput/LoginInput";
import PasswordInput from "../../../UI/Password.Input/PasswordInput";

const Login = () => {
  return (
    <div>
      <div>
        <h3>Sign up</h3>
        <h3>Sign in</h3>
      </div>
      <form>
        <LoginInput />
        <PasswordInput />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
