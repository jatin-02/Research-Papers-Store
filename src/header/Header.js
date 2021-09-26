import React, { Component } from "react";
import "./header.css";
import { Container, NavLink } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="nav">
          <Container>
            <div className="nav_container">
              <div className="nav_logo">
                <h1>
                  Research<span>It</span>
                </h1>
              </div>

              <div className="nav_search mx-4">
                <input type="text" placeholder="Search for research papers" />
              </div>

              <div className="nav_items">
                <div className="nav_item">
                  <NavLink to="#">Home</NavLink>
                </div>
                <div className="nav_item">
                  <NavLink to="#">Home</NavLink>
                </div>
                <div className="nav_item">
                  <NavLink to="#">Home</NavLink>
                </div>
                <div className="nav_item">
                  <NavLink to="#">Home</NavLink>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
