import React, { Component, PropTypes } from "react";
import "./bar.css";

export default class Bar extends Component {
  render() {
    return (
      <div className="bar_top">
        <h1 className="bar_top_h1">
          <a href="#">JS.COACH</a>
        </h1>
        <from className="bar_from">
          <input
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            tabindex="1"
            spellcheck="false"
            className="bar_input"
            type="text"
            placeholder="🔍 Search"
            name="search"
          />
        </from>
        <div className="bar_menu">
          <div className="bar_menu_child">
            <a className="bar_menu_child" href="#">
              <span>MENU</span>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="m3 20h20v-2h-20v2m0-7h20v-2h-20v2m0-9v2h20v-2h-20" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
