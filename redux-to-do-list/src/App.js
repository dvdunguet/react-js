import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import "./App.css";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    let { isDisplayForm } = this.props;

    return (
      <div className="container">
        <div className="page-header">
          <h1>
            Quản lý<small>công việc</small>
          </h1>
        </div>
        <Control />
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
            <TaskList />
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
