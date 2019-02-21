import React, { Component } from "react";

export default class Message extends Component {
  render() {
    let { children } = this.props;
    return (
      <h3>
        <span className="badge amber darken-2">{children}</span>
      </h3>
    );
  }
}
