import * as React from "react";
import classes from "./LoginInput.module.css";

const LoginInput = () => {
  return (
    <div>
      <h2>Login</h2>
      <input
        className={classes.inp}
        name="email"
        type="text"
        placeholder="Input login"
      />
    </div>
  );
};

export default LoginInput;
