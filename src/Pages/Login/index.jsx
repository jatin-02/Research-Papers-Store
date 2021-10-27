import React from "react";

// importing styles
import "./style.css";

// importing login btn
import LoginBtn from "./LoginBtn";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-box-content">
          <h1>Welcome</h1>
          <h1>to</h1>
          <h1>
            Research <span>It</span>
          </h1>
        </div>

        <LoginBtn />
      </div>
    </div>
  );
};

export default Login;
