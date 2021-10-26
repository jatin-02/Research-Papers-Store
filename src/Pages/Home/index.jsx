import React, { Component } from "react";
import "./style.css";
import { CardSection } from "../../Components/CardSection";

export class Home extends Component {
  render() {
    return (
      <div>
        <CardSection />
        <CardSection />
        <CardSection />
      </div>
    );
  }
}

export default Home;
