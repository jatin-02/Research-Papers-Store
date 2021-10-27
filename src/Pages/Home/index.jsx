import React from "react";
import Card from "../../Components/Card";

// importing link
import { Link } from "react-router-dom";

// importing styles
import "./style.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-12 carousel">
          <img
            src="https://www.wallpapertip.com/wmimgs/12-125679_cool-background.jpg"
            alt="iron man"
          />
        </div>
      </div>
      <div className="card-section row">
        <div className="col-lg-4 col-md-6 col-12 ">
          <Link to="/detail">
            <Card />
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <Link to="/detail">
            <Card />
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <Link to="/detail">
            <Card />
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <Link to="/detail">
            <Card />
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <Link to="/detail">
            <Card />
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <Link to="/detail">
            <Card />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
