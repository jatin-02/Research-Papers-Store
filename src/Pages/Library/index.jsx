import React from "react"
import Card from "../../Components/Card"
import {Link} from 'react-router-dom'
import "./style.css"
const Library = () => {
  return (
    <div className="library-page">

      <div className="header">
        <h1>Library</h1>
      </div>

      <div className="main">

        <div className="category">                  
          <div className="category-title">
            <h2>Object Oriented Programming</h2>
          </div>
          <div className="category-items">           
              <div className="col-lg-4 col-md-6 col-12 ">
                <Link to="/detail">
                  <Card />
                </Link>
            </div>
          </div>
        </div>

        <div className="category">                  
          <div className="category-title">
            <h2>Physics</h2>
          </div>
          <div className="category-items">           
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

        <div className="category">                  
          <div className="category-title">
            <h2>Mathematics</h2>
          </div>
          <div className="category-items">           
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

      </div>

    </div>
  )
};

export default Library;
