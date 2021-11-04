import React from "react";

// importing react router dom
import { Link } from "react-router-dom";

// importing components
import Card from "./Card";

// importing data
import categories from "./../../Data/Categories/categories";

// importing styles
import "./style.css";

const Category = () => {
  return (
    <div className="category-page">
      <div className="row">
        {categories.map((item) => {
          return (
            <div key={item.id} className="col-md-6 col-12 p-0">
              <Link to={`/category/${item.domain.toLocaleLowerCase()}`}>
                <Card domain={item.domain} category_img={item.category_img} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
