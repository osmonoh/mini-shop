import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login center-box">
      <h2>Login</h2>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email*" required />
        <input type="password" placeholder="Password*" required />
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
