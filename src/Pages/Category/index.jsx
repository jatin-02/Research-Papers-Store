import React from "react";

// importing react router dom
import { Link } from "react-router-dom";

// importing components
import Card from "./Card";

// importing data
import categoryData from "./CategaryCardData";

// importing styles
import "./style.css";

const Category = () => {
  return (
    <div className="category-page">
      <div className="row">
        {categoryData.map((item) => {
          return (
            <div key={item.id} className="col-md-6 col-12 p-0">
              <Link to={`/category/${item.title}`}>
                <Card title={item.title} imgSrc={item.imgSrc} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
