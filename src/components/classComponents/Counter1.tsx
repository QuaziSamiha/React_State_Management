import React from "react";

class Counter1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this); // state will be null
    return (
      <button className="m-12 px-12 py-6 bg-pink-500 rounded-md text-xl text-white">
        0
      </button>
    );
  }
}

export default Counter1;
