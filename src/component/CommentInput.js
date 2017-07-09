import React, { Component, PropTypes } from "react";
import "./style/index.css";

export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
  }

  componentWillMount() {
    this._loadUsername();
  }

  componentDidMount() {
    this.textarea.focus();
  }

  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({
        username
      });
    }
  }

  _saveUsername(username) {
    localStorage.setItem("username", username);
  }

  handleUsernameBlur(e) {
    this._saveUsername(e.target.value);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      });
    }
    this.setState({
      content: ""
    });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用戶名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">評論內容：</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <div style={{ color: "#ff0000" }}>{this.props.warntext}</div>
          <button onClick={this.handleSubmit.bind(this)}>
            發布
          </button>
        </div>
      </div>
    );
  }
}
