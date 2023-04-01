import React, { Component } from 'react';

class Overview extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li>{task.text}</li>;
        })}
      </ul>
    );
  }
}

export default Overview;
