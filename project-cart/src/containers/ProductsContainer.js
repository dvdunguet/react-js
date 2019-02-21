import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Containers/Products/Products";
import ProductItem from "../components/Containers/Products/ProductItem";
import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions";
import * as Message from "../constants/Message";

class ProductsContainer extends Component {
  onAddToCart = product => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  };

  render() {
    let { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }

  showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            onAddToCart={this.onAddToCart}
          />
        );
      });
    }
    return result;
  };
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
