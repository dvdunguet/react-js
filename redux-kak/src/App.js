import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import "./App.css";
import Control from "./components/Control";
import { findIndex } from "lodash";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: "",
        status: -1
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1
      }
    };
  }

  onUpdateElement = id => {
    let { tasks } = this.state;
    let index = findIndex(tasks, ["id", id]);
    if (index > -1) {
      let taskEditing = tasks[index];
      this.setState({
        taskEditing: taskEditing
      });
      this.onShowForm();
    }
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };
  onSearch = keyword => {
    this.setState({
      keyword: keyword
    });
  };
  onSort = (by, value) => {
    this.setState({
      sort: {
        by: by,
        value: value
      }
    });
  };
  render() {
    let { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter(task => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   if (filter.status > -1) {
    //     let status = filter.status === 1 ? true : false;
    //     tasks = tasks.filter(task => {
    //       return task.status === status;
    //     });
    //   }
    // }
    // if (keyword) {
    //   tasks = tasks.filter(task => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }
    // if (sort.by === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sort.value;
    //     else if (a.name < b.name) return -sort.value;
    //     else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sort.value;
    //     else if (a.status < b.status) return sort.value;
    //     else return 0;
    //   });
    // }

    return (
      <div className="container">
        <div className="page-header">
          <h1>
            Quản lý<small>công việc</small>
          </h1>
        </div>
        <Control onSearch={this.onSearch} onSort={this.onSort} />
        <div className="row mt-30">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {<TaskForm />}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <TaskList onFilter={this.onFilter} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
