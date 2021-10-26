import React from "react";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card_container">
        <div className="card_heading">
          <h1>Linked List</h1>
        </div>

        <div className="card_content">
          <div className="card_name card_detail">
            <p>
              <span>Name:</span> The name of research paper name which is
              slightly big
            </p>
          </div>

          <div className="card_author card_detail">
            <p>
              <span>by:</span> Jatin Soni, Jatin Soni, Jatin Soni and Jatin Soni
            </p>
          </div>

          <div className="card_year card_detail">
            <p>
              <span>year:</span> 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
