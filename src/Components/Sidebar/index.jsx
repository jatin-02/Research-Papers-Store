import React, { useState } from "react";

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
import { RiHistoryLine as HistoryIcon } from "react-icons/ri";
import { BiLibrary as LibraryIcon } from "react-icons/bi";
import { BiUser as UserIcon } from "react-icons/bi";

const Sidebar = () => {
  const [expand, setExpand] = useState(false);
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
            <NavLink
              to="/history"
              activeClassName="active"
              exact
              className="list-item"
            >
              <div className="menu-icon">
                <HistoryIcon />
                <div className="tool-tip">History</div>
              </div>
              {expand ? <div className="menu-text">History</div> : ""}
            </NavLink>
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
          </div>
        </div>
        <div className="sidebar-footer">
          {/* login btn if user isn't logged in */}
          <NavLink activeClassName="active" exact to="/login">
            <div className="sidebar-login-btn">
              <div className="user-icon">
                <UserIcon />
              </div>
              {expand ? <div className="login-text">Login</div> : ""}
            </div>
          </NavLink>
          {/* profile section if user is logged in */}
          {/* <div className="user-profile">
            <div className="user-img">
              <img
                src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"
                alt="user"
              />
            </div>
            {expand ? <div className="user-text">Sahil Verma</div> : ""}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
