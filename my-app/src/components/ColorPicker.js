import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "black", "orange"]
    };
  }

  showColor(color) {
    return {
      backgroundColor: color
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }

  render() {
    let elmColors = this.state.colors.map((color, index) => {
      return (
        <span
          className={this.props.color === color ? "active" : ""}
          key={index}
          style={this.showColor(color)}
          onClick={() => {
            this.setActiveColor(color);
          }}
        />
      );
    });
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">ColorPicker</h3>
          </div>
          <div className="panel-body">{elmColors}</div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
