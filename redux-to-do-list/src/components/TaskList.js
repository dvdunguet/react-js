import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import * as actions from "../actions";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: "-1"
    };
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilterTable({
      filterName: name === "filterName" ? value : this.state.filterName,
      filterStatus: name === "filterStatus" ? value : this.state.filterStatus
    });
    this.setState({
      [name]: value
    });
  };

  resetDefault = () => {
    this.props.onFilterTable({
      filterName: "",
      filterStatus: "-1"
    });
    this.setState({
      filterName: "",
      filterStatus: "-1"
    });
  };

  render() {
    let { tasks, filterTable, keyword, sort } = this.props;

    if (filterTable.filterName) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(filterTable.filterName) !== -1;
      });
    }

    if (filterTable.filterStatus > -1) {
      let status = filterTable.filterStatus === 1 ? true : false;
      tasks = tasks.filter(task => {
        return task.status === status;
      });
    }

    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    if (sort.sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.sortValue;
        else if (a.name < b.name) return -sort.sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sort.sortValue;
        else if (a.status < b.status) return sort.sortValue;
        else return 0;
      });
    }

    let elementTask = tasks.map((task, index) => {
      return <Item key={index} task={task} index={index} />;
    });

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <button className="btn btn-warning" onClick={this.resetDefault}>
                Reset
              </button>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={this.state.filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={this.state.filterStatus}
                onChange={this.onChange}
              >
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td />
          </tr>
          {elementTask}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: filter => {
      dispatch(actions.filterTask(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
