import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: true
    };
  }

  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEdit) {
      this.setState({
        id: nextProps.itemEdit.id,
        name: nextProps.itemEdit.name,
        status: nextProps.itemEdit.status
      });
    } else if (!nextProps.itemEdit) this.onReset();
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") value = value === "true" ? true : false;
    this.setState({
      [name]: value
    });
  };
  onSubmit = () => {
    this.props.onAddTask(this.state);
    this.props.onCloseForm();
    this.onReset();
  };

  onReset = () => {
    this.setState({
      id: "",
      name: "",
      status: true
    });
  };

  render() {
    if (!this.props.isDisplayForm) return "";
    let { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id === "" ? "Thêm công việc" : "Cập nhật công việc"}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.props.onCloseForm}
            />
          </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="">Tên</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <select
                id="input"
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value="true">Kích hoạt</option>
                <option value="false">Ẩn</option>
              </select>
            </div>
            <div className="text-center mt-30">
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onSubmit}
              >
                <span className="fa fa-plus mr-5" />
                &nbsp;Lưu lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onReset}
              >
                <span className="fa fa-close mr-5" />
                &nbsp;Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEdit: state.itemEdit
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: task => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
