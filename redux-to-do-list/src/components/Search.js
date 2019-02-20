import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSearch = keyword => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    let { keyword } = this.state;

    return (
      <div className="input-group">
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={this.onChange}
          className="form-control"
          placeholder="Nhập từ khóa..."
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSearch}
          >
            <span className="fa fa-search mr-5" />
            Tìm
          </button>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: keyword => {
      dispatch(actions.searchTask(keyword));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
