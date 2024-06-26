import React, { Component } from "react";

export class Counter2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this); // now state is not null
    const { count } = this.state;
    return (
      <div>
        <button
          onClick={() => this.setState({ count: count + 1 })}
          className="m-12 px-12 py-6 bg-purple-500 rounded-md text-xl text-white"
        >
          {count}
        </button>
      </div>
    );
  }
}

export default Counter2;
