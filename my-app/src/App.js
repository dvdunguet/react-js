import React, { Component } from "react";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15
    };
  }
  onSetColor = color => {
    this.setState({
      color: color
    });
  };
  onSetSize = size => {
    this.setState({
      fontSize: this.state.fontSize + size
    });
  };
  onSettingDefault = () => {
    this.setState({
      color: "red",
      fontSize: 15
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor}
          />
          <SizeSetting
            size={this.state.fontSize}
            onReceiveFontSize={this.onSetSize}
            onSettingDefault={this.onSettingDefault}
          />
        </div>
        <div className="row">
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
