import * as React from "react";
import classes from "./PasswordInput.module.css";
const PasswordInput = () => {
  return (
    <div>
      <h2>Password</h2>
      <input
        className={classes.inp}
        type="password"
        placeholder="Input password"
      />
    </div>
  );
};

export default PasswordInput;
