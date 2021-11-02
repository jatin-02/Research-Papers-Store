import React, { useState } from "react";

// importing styles
import "./style.css";

// importing icons
import { AiOutlineLogout as LogoutIcon } from "react-icons/ai";

// importing firebase auth
import { auth } from "../../Firebase/config";
import { signOut, onAuthStateChanged } from "@firebase/auth";

// importing use history
import { useHistory } from "react-router";

const Profile = () => {
  const [user, setuser] = useState(null);
  const history = useHistory();
  onAuthStateChanged(auth, (res) => {
    if (res === null) history.push("/");
    setuser(res);
    console.log(res);
  });
  return (
    <div className="profile-page">
      <div className="profile-inner">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="profile-img"
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="profile-detail">
              <div className="data">
                <span>Name:</span> {user?.displayName}
              </div>
              <div className="data">
                <span>Email:</span> {user?.email}
              </div>
              <div className="data">
                <span>Library:</span> 0 papers
              </div>
              <button className="sign-out" onClick={(e) => signOut(auth)}>
                <LogoutIcon /> Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
