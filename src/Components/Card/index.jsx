import React from "react";
import "./style.css";

const Card = ({ title, topic, author, year }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-heading">
          <h1>{title}</h1>
        </div>

        <div className="card-content">
          <div className="card-name card-detail">
            <p>
              <span>Topic:</span> {topic}
            </p>
          </div>

          <div className="card-author card-detail">
            <p>
              <span>Author:</span> {author.join(" ,")}
            </p>
          </div>

          <div className="card-year card-detail">
            <p>
              <span>Year of publication:</span> {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
