import React, { Component, PropTypes } from "react";
import "./body.css";

export default class Body_right extends Component {
  render() {
    return (
      <div className="body_right">
        <div className="body_right1">
          <div className="body_right2">
            <img
              className="body_right_img"
              draggable="false"
              src="https://js.coach/assets/jess-b1bdee06bb880adf0d84b22e860602edb21e471b703a438c87a60b95c4058d9c.png"
              alt="Jess b1bdee06bb880adf0d84b22e860602edb21e471b703a438c87a60b95c4058d9c"
            />
            <p>Coach Jess welcomes you!</p>
          </div>
          <h2 className="body_right_h2">
            This is an opinionated catalog of open source JS packages.
          </h2>
          <p>
            Libraries come and go. The ecosystem evolves rapidly, and that's a
            good thing. But it means you can't rely on your bookmarks. Google
            may not be your best friend either, since it focuses on popular
            results — established solutions that may not be the best fit for
            your project.
          </p>
          <p>
            This website indexes new packages and is updated roughly once per
            day, by using both automated scripts and manual curation. It is a
            complete rewrite and grown-up version of <a href="#">React.parts</a>,
            a tiny project that started 2 years ago. Even if you are
            implementing your own solution for your particular problem, this can
            be a good place to find interesting code to learn from.
          </p>
          <p>I hope this catalog is as useful to you as it is to me.</p>
        </div>
      </div>
    );
  }
}
