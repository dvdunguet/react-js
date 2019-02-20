import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Item extends Component {
  onToggleItemm = task => {
    this.props.onEditItem(task);
    this.props.onOpenForm();
  };

  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <th>{index + 1}</th>
        <th>{task.name}</th>
        <th className="text-center">
          {task.status ? (
            <span
              className="label label-success"
              onClick={() => this.props.onUpdateStatus(task.id)}
            >
              Kích hoạt
            </span>
          ) : (
            <span
              className="label label-danger"
              onClick={() => this.props.onUpdateStatus(task.id)}
            >
              Ẩn
            </span>
          )}
        </th>
        <th className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.onToggleItemm(task)}
          >
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.onDeleteItem(task.id)}
          >
            Xóa
          </button>
        </th>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: id => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteItem: id => {
      dispatch(actions.deleteItem(id));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditItem: task => {
      dispatch(actions.editItem(task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
