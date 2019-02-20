import React, { Component } from "react";

export default class Search extends Component {
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
            onClick={() => this.props.onSearch(keyword)}
          >
            <span className="fa fa-search mr-5" />
            Tìm
          </button>
        </span>
      </div>
    );
  }
}
