import React, { Component } from "react";
import Reset from "./Reset";

class SizeSetting extends Component {
  changeSize(size) {
    this.props.onReceiveFontSize(size);
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Size: {this.props.size}px</h3>
          </div>
          <div className="panel-body">
            <button
              type="button"
              onClick={() => {
                this.changeSize(2);
              }}
              className="btn btn-large btn-primary"
            >
              Tăng
            </button>
            <button
              type="button"
              onClick={() => {
                this.changeSize(-2);
              }}
              className="btn btn-large btn-primary"
            >
              Giảm
            </button>
          </div>
        </div>
        <Reset onSettingDefault={this.props.onSettingDefault} />
      </div>
    );
  }
}

export default SizeSetting;
