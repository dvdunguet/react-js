/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img src={item.product.img} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() =>
                this.props.onchangeVolume(item.product.id, item.quantity - 1)
              }
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() =>
                this.props.onchangeVolume(item.product.id, item.quantity + 1)
              }
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.props.onDelete(item.product.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}
