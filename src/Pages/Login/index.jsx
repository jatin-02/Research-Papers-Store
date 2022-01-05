import React, { useContext, useEffect } from "react";

// importing styles
import "./style.css";

// importing login btn
import LoginBtn from "./LoginBtn";

// importing auth
import { auth, firestore } from "../../Firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, serverTimestamp, doc } from "firebase/firestore";

// import react router dom
import { useHistory } from "react-router-dom";

// importing firebase context
import { AuthContext } from "../../Context/Firebase";

const Login = () => {
  //get the user state from the context
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  onAuthStateChanged(auth, (user) => {
    if (user) history.push("/");
  });

  const login = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(({ user }) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  };
  const docRef = doc(firestore, "users", `${user?.uid}`);

  useEffect(() => {
    const unsub = setDoc(
      docRef,
      {
        lastlogin: serverTimestamp(),
      },
      { merge: true },
      (doc) => console.log(doc)
    );
    return () => unsub;
  }, [user, docRef]);
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
