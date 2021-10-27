import React from "react";

// importing styles
import "./style.css";

// importing login btn
import LoginBtn from "./LoginBtn";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome to Research</h1>
        <LoginBtn />
      </div>
    </div>
  );
};

export default Login;
