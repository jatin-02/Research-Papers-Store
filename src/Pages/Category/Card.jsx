import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ category_img, domain }) => {
  return (
    <div className="category-card">
      <LazyLoadImage
        effect="blur"
        src={category_img}
        alt={domain}
        className="category-card-bg"
      />
      <div className="title">{domain}</div>
    </div>
  );
};

export default Card;
