import React from "react";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import "./style.css";
const Category = () => {
  const subDomains = ["Sub-Domain", "Sub-Domain"];
  return (
    <div className="category-page">
      <div className="header">
        <h1>Domain</h1>
      </div>

      <div className="main">
        {subDomains.map((subdomain) => {
          return (
            <section className="subdomains">
              <div className="subdomain-header">
                <h2>{subdomain}</h2>
              </div>
              <div className="subdomain-items">
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
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
