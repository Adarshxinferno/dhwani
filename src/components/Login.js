import React from "react";
import "./Login.css";
import Logo from "../dhwani_logo.png";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Dhwani Logo" />
      <a>Login with Spotify</a>
    </div>
  );
}

export default Login;
