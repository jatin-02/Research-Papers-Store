import React from "react";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-heading">
          <h1>Title</h1>
        </div>

        <div className="card-content">
          <div className="card-name card-detail">
            <p>
              <span>Topic:</span> Topic of the research paper
            </p>
          </div>

          <div className="card-author card-detail">
            <p>
              <span>Author:</span> Authors of research paper
            </p>
          </div>

          <div className="card-year card-detail">
            <p>
              <span>Year of publication:</span> 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
