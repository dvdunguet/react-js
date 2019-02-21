import React, { Component } from "react";
import ProductsContainer from "../../containers/ProductsContainer";
import CartContainer from "../../containers/CartContainer";
import MessageContainer from "../../containers/MessageContainer";

class Container extends Component {
  render() {
    return (
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <MessageContainer />
          <CartContainer />
        </div>
      </main>
    );
  }
}

export default Container;
