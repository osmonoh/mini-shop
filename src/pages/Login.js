import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="login center-box">
      <h2>Login</h2>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email*" required />
        <div className="password-input">
          <input
            type={visible ? "text" : "password"}
            placeholder="Password*"
            required
          />
          <div
            className="password-input-icon"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>
        <p>
          You don't have an account yet? Please register{" "}
          <Link to="/register">here</Link>.
        </p>
        <button className="btn-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
