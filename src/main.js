import React, { Component, PropTypes } from "react";
import Bar from "./bar/Bar";
import Body from "./body/Body";

export default class Main extends Component {
  render() {
    return (
      <div className="body">
        <Bar />
        <Body />
      </div>
    );
  }
}
