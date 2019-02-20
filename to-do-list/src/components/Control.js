import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

export default class Control extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              className="btn btn-large  btn-primary"
              onClick={this.props.onOpenCloseForm}
            >
              <i className="fa fa-plus" />
              &nbsp; Thêm công việc
            </button>
          </div>
        </div>
        <div className="row mt-10">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Search onSearch={this.props.onSearch} />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Sort onSort={this.props.onSort} />
          </div>
        </div>
      </div>
    );
  }
}
