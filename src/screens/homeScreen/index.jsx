import React, { Component } from "react";
import "./style.css";
import { CardSection } from "../../components/cardSection/index";

export class HomeScreen extends Component {
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

export default HomeScreen;
