import React from "react";

// importing params
import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const { domain } = useParams();
  return <div className="category-page">{domain} page</div>;
};

export default SingleCategory;
