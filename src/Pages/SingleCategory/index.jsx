import React from "react";

// importing params
import { useParams } from "react-router-dom";

const SignleCategory = () => {
  const { title } = useParams();
  return <div className="category-page">{title} page</div>;
};

export default SignleCategory;
