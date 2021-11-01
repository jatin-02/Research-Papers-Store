import React from "react";

const Card = ({ category_img, domain }) => {
  return (
    <div className="category-card">
      <img src={category_img} alt={domain} className="category-card-bg" />
      <div className="title">{domain}</div>
    </div>
  );
};

export default Card;
