import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Containers/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
