import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <th>{index + 1}</th>
        <th>{task.name}</th>
        <th>
          {task.status ? (
            <span
              className="label label-success"
              onDoubleClick={() => this.props.onDoubleClick(task.id)}
            >
              Kích hoạt
            </span>
          ) : (
            <span
              className="label label-danger"
              onDoubleClick={() => this.props.onDoubleClick(task.id)}
            >
              Ẩn
            </span>
          )}
        </th>
        <th>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.props.onUpdateElement(task.id)}
          >
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.onDeleteElement(task.id)}
          >
            Xóa
          </button>
        </th>
      </tr>
    );
  }
}
