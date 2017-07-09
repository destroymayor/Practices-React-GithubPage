import React, { Component, PropTypes } from "react";
import "./body.css";
import BodyLeft from "./Body_left";
import BodyMind from "./Body_mid";
import BodyRight from "./Body_right";

export default class Body extends Component {
  render() {
    return (
      <div className="body_top">
        <BodyLeft />
        <BodyMind />
        <BodyRight />
      </div>
    );
  }
}
