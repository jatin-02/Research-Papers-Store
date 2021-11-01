import React from "react";

// importing params
import { useParams } from "react-router-dom";

const SignleCategory = () => {
  const { domain } = useParams();
  return <div className="category-page">{domain} page</div>;
};

export default SignleCategory;
