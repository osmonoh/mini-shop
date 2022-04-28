import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="register center-box">
      <h2>Register</h2>

      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="First name*" required />
        <input type="text" placeholder="Last name*" required />
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
          You have an account already? Please login{" "}
          <Link to="/login">here</Link>.
        </p>
        <button className="btn-register" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
