import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Message from "../components/Containers/Message";

export class MessageContainer extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render() {
    let { message } = this.props;
    return <Message>{message}</Message>;
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(
  mapStateToProps,
  null
)(MessageContainer);
