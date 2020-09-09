import React from "react";
import "./Login.css";
import Logo from "../dhwani_logo.png";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Dhwani Logo" />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
