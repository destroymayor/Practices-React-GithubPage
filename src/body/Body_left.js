import React, { Component, PropTypes } from "react";
import "./body.css";

export default class Body extends Component {
  render() {
    return (
      <div className="body_left">
        <div className="body_left_child">
          <a className="body_left_child_a" href="#">
            Everything
          </a>
          <a className="body_left_child_a0" href="#">
            Pinned
          </a>
          <a className="body_left_child_a1" href="#">
            React
          </a>
          <a className="body_left_child_a1" href="#">
            React Native
          </a>
          <a className="body_left_child_a1" href="#">
            Webpack
          </a>
          <a className="body_left_child_a1" href="#">
            Browserify
          </a>
          <a className="body_left_child_a1" href="#">
            PostCSS
          </a>
        </div>
        <div className="body_left_child_Bottom">
          <div className="body_left_child_Bottom1">
            <div className="body_left_child_Bottom2">Sort by</div>
            <ul className="body_left_child_Bottom2_ul">
              <li>
                <span>Updated</span>
              </li>
              <li>
                <span>New</span>
              </li>
              <li>
                <span>Popular</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
