import React from "react";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-heading">
          <h1>Linked List</h1>
        </div>

        <div className="card-content">
          <div className="card-name card-detail">
            <p>
              <span>Name:</span> The name of research paper name which is
              slightly big
            </p>
          </div>

          <div className="card-author card-detail">
            <p>
              <span>by:</span> Jatin Soni, Jatin Soni, Jatin Soni and Jatin Soni
            </p>
          </div>

          <div className="card-year card-detail">
            <p>
              <span>Year:</span> 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
