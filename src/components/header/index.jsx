import React, { Component } from "react";
import "./style.css";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="navbar_logo">
            <h1>
              Research<span>It</span>
            </h1>
          </div>

          <div className="navbar_search">
            <div className="navbar_search_input">
              <input type="text" placeholder="Search" />
            </div>
            <div className="navbar_search_icon">
              <ImSearch />
            </div>
          </div>

          <div className="navbar_items">
            <div className="navbar_item">
              <Link to="/">Categories</Link>
            </div>
            <div className="navbar_item">
              <Link to="/">History</Link>
            </div>
            <div className="navbar_item">
              <Link to="/">Library</Link>
            </div>
            <div className="navbar_item">
              <Link to="/">Account</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
