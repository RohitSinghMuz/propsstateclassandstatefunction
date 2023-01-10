import React, { Component } from "react";

export default class Stateclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div style={{ width: "40%", margin: "10px auto" }}>
          <h2>{this.state.count}</h2>
          <button
            style={{ padding: "10px 20px", margin: "10px" }}
            onClick={this.Increment}
          >
            State Using class component Increment
          </button>
        </div>
      </>
    );
  }
}
