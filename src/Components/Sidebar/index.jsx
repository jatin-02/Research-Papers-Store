import React, { useContext, useState } from "react";

// importing styles
import "./style.css";

// importing react router dom
import { NavLink, Link } from "react-router-dom";

// importing icons
import { AiOutlineMenu as MenuOpenIcon } from "react-icons/ai";
import { BiMenuAltRight as MenuCloseIcon } from "react-icons/bi";
import { BiSearch as SearchIcon } from "react-icons/bi";
import { GrHomeRounded as HomeIcon } from "react-icons/gr";
import { BiCategory as CategoryIcon } from "react-icons/bi";
import { BiLibrary as LibraryIcon } from "react-icons/bi";
import { BiUser as UserIcon } from "react-icons/bi";
import { AiOutlineLogout as LogoutIcon } from "react-icons/ai";

// importing firebase
import { auth } from "../../Firebase/config";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../Context/Firebase";

const Sidebar = () => {
  const [expand, setExpand] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className={`sidebar ${expand ? "expand" : ""}`}>
      <div className="sidebar-inner">
        <div className="sidebar-header">
          {expand ? (
            <Link to="/">
              Research<span>It</span>
            </Link>
          ) : (
            ""
          )}
          <div className="menu-btn" onClick={() => setExpand(!expand)}>
            {expand ? <MenuCloseIcon /> : <MenuOpenIcon />}
          </div>
        </div>
        <div
          className="sidebar-search"
          onClick={(e) => {
            if (expand === false) setExpand(true);
          }}
        >
          <div className="search-box">
            <div className="search-icon">
              <SearchIcon />
            </div>
            {expand ? (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <hr />
        <div className="sidebar-nav-menu">
          <div className="menu-list">
            <NavLink
              to="/"
              activeClassName="active"
              exact
              className="list-item"
            >
              <div className="menu-icon">
                <HomeIcon />
                <div className="tool-tip">Home</div>
              </div>
              {expand ? <div className="menu-text">Home</div> : ""}
            </NavLink>
            <NavLink
              to="/category"
              activeClassName="active"
              exact
              className="list-item"
            >
              <div className="menu-icon">
                <CategoryIcon />
                <div className="tool-tip">Category</div>
              </div>
              {expand ? <div className="menu-text">Category</div> : ""}
            </NavLink>
            {user && (
              <NavLink
                to="/library"
                activeClassName="active"
                exact
                className="list-item"
              >
                <div className="menu-icon">
                  <LibraryIcon />
                  <div className="tool-tip">Library</div>
                </div>
                {expand ? <div className="menu-text">Library</div> : ""}
              </NavLink>
            )}
          </div>
        </div>
        <div className="sidebar-footer">
          {/* login btn if user isn't logged in */}
          {user != null ? (
            <div className="user-profile" title={user?.displayName}>
              <div className="user-img">
                <Link to="/profile">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </Link>
              </div>
              {expand ? (
                <div className="user-text">
                  <Link to="/profile">{user?.displayName}</Link>
                </div>
              ) : (
                ""
              )}

              {expand ? (
                <div
                  className="logout-icon"
                  onClick={(e) => {
                    signOut(auth)
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <LogoutIcon />
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <NavLink activeClassName="active" exact to="/login">
              <div className="sidebar-login-btn">
                <div className="user-icon">
                  <UserIcon />
                </div>
                {expand ? <div className="login-text">Login</div> : ""}
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
