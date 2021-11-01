import React from "react";

const Card = ({ imgSrc, title }) => {
  return (
    <div className="category-card">
      <img src={imgSrc} alt={title} className="category-card-bg" />
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
