import React, { Component, PropTypes } from "react";
import "./body.css";

export default class Body_mid_item extends Component {
  render() {
    return (
      <div className="body_mid_child1">
        <a href="#" className="body_mid_child1_a">
          <div className="body_mid_child1_div">
            <div className="body_mid_child1_div1">
              <span>Filed under React</span>
            </div>
            <span className="body_mid_child1_span">
              <span>matrix-react-sdk</span>
              <span> </span>
              <span className="body_mid_child1_span1">
                updated 17 days ago by matrix-org
              </span>
            </span>
          </div>
          <div className="body_mid_child1_div2">
            SDK for matrix.org using React.
          </div>
          <div className="body_mid_child1_div3">
            <span className="body_mid_child1_span2" title="84 stars on GitHub">
              <span className="body_mid_child1_span3">84 stars</span>
              <span> </span>
            </span>
            <span className="body_mid_child1_span4">1.9K installs/mo</span>
          </div>
        </a>
      </div>
    );
  }
}
