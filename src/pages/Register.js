import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register center-box">
      <h2>Register</h2>

      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="First name*" required />
        <input type="text" placeholder="Last name*" required />
        <input type="email" placeholder="Email*" required />
        <input type="password" placeholder="Password*" required />
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
