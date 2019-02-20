/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort({ sortBy, sortValue });
  };

  render() {
    let { sort } = this.props;
    return (
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
          <li
            onClick={() => {
              this.onClick("name", 1);
            }}
          >
            <a
              role="button"
              className={
                sort.sortBy === "name" && sort.sortValue === 1
                  ? "sort_selected"
                  : ""
              }
            >
              <span className="fa fa-sort-alpha-asc pr-5"> Tên A-Z</span>
            </a>
          </li>
          <li
            onClick={() => {
              this.onClick("name", -1);
            }}
          >
            <a
              role="button"
              className={
                sort.sortBy === "name" && sort.sortValue === -1
                  ? "sort_selected"
                  : ""
              }
            >
              <span className="fa fa-sort-alpha-desc pr-5"> Tên Z-A</span>
            </a>
          </li>
          <li role="separator" className="divider" />
          <li
            onClick={() => {
              this.onClick("status", 1);
            }}
          >
            <a
              role="button"
              className={
                sort.sortBy === "status" && sort.sortValue === 1
                  ? "sort_selected"
                  : ""
              }
            >
              Trạng Thái Kích Hoạt
            </a>
          </li>
          <li
            onClick={() => {
              this.onClick("status", -1);
            }}
          >
            <a
              role="button"
              className={
                sort.sortBy === "status" && sort.sortValue === -1
                  ? "sort_selected"
                  : ""
              }
            >
              Trạng Thái Ẩn
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort: state.sort
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: sort => {
      dispatch(actions.sortTask(sort));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
