import React, { Component, PropTypes } from "react";
import "./body.css";
import Body_Mid_item from "./Body_mid_item";

export default class Body_mid extends Component {
  render() {
    return (
      <div className="body_mid">
        <div className="body_mid_child">
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
          <Body_Mid_item />
        </div>
      </div>
    );
  }
}
