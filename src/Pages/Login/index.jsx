import React, { useContext } from "react";

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

// import react router dom
import { useHistory } from "react-router-dom";

// importing firebase context
import { AuthContext } from "../../Context/Firebase";

const Login = () => {
  //get the user state from the context
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  onAuthStateChanged(auth, (user) => {
    if (user) history.push("/");
    console.log(user);
  });

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((err) => console.log(err));
  };
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
        <span onClick={login}>
          <LoginBtn />
        </span>
      </div>
    </div>
  );
};

export default Login;
