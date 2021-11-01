import React from "react";

// importing styles
import "./style.css";

// importing login btn
import LoginBtn from "./LoginBtn";

// importing auth
import { auth } from "../../Firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// import
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  onAuthStateChanged(auth, (user) => {
    if (user) history.push("/");
    console.log(user);
  });
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
        <span
          onClick={(e) => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
              .then((result) => {
                const user = result.user;
                console.log(user);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <LoginBtn />
        </span>
      </div>
    </div>
  );
};

export default Login;
