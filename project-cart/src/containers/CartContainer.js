import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Containers/Cart/Cart";
import * as Message from "../constants/Message";
import CartItem from "../components/Containers/Cart/CartItem";
import CartResult from "../components/Containers/Cart/CartResult";
import {
  actDeleteProductInCart,
  actChangeVolumeProduct,
  actChangeMessage
} from "../actions";

class CartContainer extends Component {
  static propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          inventory: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onchangeVolume: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
  };

  showCartItem = cart => {
    let result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDelete={this.onDelete}
            onchangeVolume={this.onchangeVolume}
          />
        );
      });
    }
    return result;
  };
  showToTalAmount = cart => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
  onDelete = id => {
    this.props.onDelete(id);
    this.props.onChangeMessage(Message.MSG_DELETE_CART_SUCESS);
  };
  onchangeVolume = (id, volume) => {
    this.props.onchangeVolume(id, volume);
    this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
  };

  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showToTalAmount(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: id => {
      dispatch(actDeleteProductInCart(id));
    },
    onchangeVolume: (id, volume) => {
      dispatch(actChangeVolumeProduct(id, volume));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
