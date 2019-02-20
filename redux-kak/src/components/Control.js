import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
import * as actions from "../actions";
import { connect } from "react-redux";

class Control extends Component {
  onToggleForm = () => {
    if (this.props.itemEdit) {
      this.props.onEditItem(null);
      this.props.onOpenForm();
    } else this.props.onToggleForm();
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              className="btn btn-large  btn-primary"
              onClick={this.onToggleForm}
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
const mapStateToProps = state => {
  return {
    itemEdit: state.itemEdit
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onEditItem: task => {
      dispatch(actions.editItem(task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
