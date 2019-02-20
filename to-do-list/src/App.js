import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import Control from "./components/Control";
import { findIndex } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
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

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }

  onOpenCloseForm = () => {
    let { isDisplayForm, taskEditing } = this.state;
    if (isDisplayForm && taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
  };

  onSubmit = data => {
    if (data.name !== "") {
      let { tasks } = this.state;
      if (data.id === "") {
        let maxId = 0;
        this.state.tasks.forEach(task => {
          if (maxId < task.id) maxId = task.id;
        });
        data.id = maxId + 1;
        tasks.push(data);
      } else {
        let index = findIndex(this.state.tasks, ["id", data.id]);
        if (index > -1) {
          tasks[index] = data;
        }
      }
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };

  onDeleteElement = id => {
    let { tasks } = this.state;
    let index = findIndex(tasks, ["id", id]);
    if (index > -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
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

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      taskEditing: null
    });
  };

  onDoubleClick = id => {
    let { tasks } = this.state;
    let index = findIndex(tasks, ["id", id]);
    if (index > -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
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
    let {
      tasks,
      isDisplayForm,
      taskEditing,
      filter,
      keyword,
      sort
    } = this.state;

    if (filter) {
      if (filter.name) {
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      if (filter.status > -1) {
        let status = filter.status === 1 ? true : false;
        tasks = tasks.filter(task => {
          return task.status === status;
        });
      }
    }
    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sort.value;
        else if (a.status < b.status) return sort.value;
        else return 0;
      });
    }
    let elementTaskForm = isDisplayForm ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditing}
      />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="page-header">
          <h1>
            Quản lý<small>công việc</small>
          </h1>
        </div>
        <Control
          onOpenCloseForm={this.onOpenCloseForm}
          onSearch={this.onSearch}
          onSort={this.onSort}
        />
        <div className="row mt-30">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elementTaskForm}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <ToDoForm
              onFilter={this.onFilter}
              tasks={tasks}
              onDoubleClick={this.onDoubleClick}
              onUpdateElement={this.onUpdateElement}
              onDeleteElement={this.onDeleteElement}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
