import React, { useContext, useEffect, useState } from "react";

// importing styles
import "./style.css";

// importing icons
import { AiOutlineLogout as LogoutIcon } from "react-icons/ai";

// importing firebase auth
import { auth, firestore } from "../../Firebase/config";
import { signOut } from "@firebase/auth";

// importing use history
import { useHistory } from "react-router";
import { AuthContext } from "../../Context/Firebase";
import { doc, onSnapshot } from "@firebase/firestore";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [saved, setSaved] = useState(null);
  const id = user?.uid;

  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, "users", `${id}`), (doc) => {
      setSaved(doc.data().saved);
    });
    return () => unsub();
  }, []);
  const history = useHistory();
  if (user == null) history.push("/");
  return (
    <div className="profile-page">
      <div className="profile-inner">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={user?.photoURL.slice(0, user?.photoURL.length - 6)}
              alt={user?.displayName}
              className="profile-img"
            />
          </div>

          <div className="col-12 col-md-6">
            <div className="profile-detail">
              <div className="data">
                <span>Name -</span> {user?.displayName}
              </div>
              <div className="data">
                <span>Email -</span> {user?.email}
              </div>
              {saved !== null ? (
                <div className="data">
                  <span>Library -</span> {saved.length} papers
                </div>
              ) : (
                ""
              )}
              <button
                className="sign-out"
                onClick={(e) => {
                  signOut(auth);
                  setUser(null);
                }}
              >
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
