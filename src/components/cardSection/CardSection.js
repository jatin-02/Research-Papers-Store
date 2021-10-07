import React, { Component } from "react";
import "./cardSection.css";
import { Card } from "./../card/Card";

export class CardSection extends Component {
  render() {
    return (
      <>
        <div className="cardSection">
          <div className="cardSection_top">
            <div className="cardSection_title">
              <h2>Categories</h2>
            </div>
            <div className="cardSection_more">
              <h2>More</h2>
            </div>
          </div>

          <div className="cardSection_bottom">
            <div className="card_holder">
              <Card />
            </div>
            <div className="card_holder">
              <Card />
            </div>
            <div className="card_holder">
              <Card />
            </div>
            <div className="card_holder">
              <Card />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardSection;
