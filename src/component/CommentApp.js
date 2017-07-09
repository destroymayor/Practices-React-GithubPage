import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import "./style/index.css";

export default class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      warntext: ""
    };
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({
        comments
      });
    }
  }

  _saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return this.setState({ warntext: "請輸入用戶名" });
    if (!comment.content) return alert("請輸入評論內容");
    const comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments
    });
    this._saveComments(comments);
    //console.log(comment);
  }

  handleDeleteComment(index) {
    //console.log(index);
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({
      comments
    });
    this._saveComments(comments);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          warntext={this.state.warntext}
          onSubmit={this.handleSubmitComment.bind(this)}
        />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    );
  }
}
