import React, { Component } from "react";

class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Color: {this.props.color} - Fontsize : {this.props.fontSize}
            </h3>
          </div>
          <div className="panel-body">
            <div id="content" style={this.setStyle()}>
              Nội dung setting
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
