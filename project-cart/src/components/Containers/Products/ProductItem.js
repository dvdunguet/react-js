/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.img} className="img-fluid" alt="" />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">{this.showRating(product.rating)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.props.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showRating = rating => {
    let rusult = [];
    for (let i = 0; i < rating; i++) {
      rusult.push(
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      );
    }
    for (let i = rusult.length; i < 5; i++) {
      rusult.push(
        <li key={i}>
          <i className="fa fa-star-o" />
        </li>
      );
    }
    return rusult;
  };
}
