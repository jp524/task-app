import * as React from 'react';
import TaskInterface from '../interfaces/TaskInterface';

class Overview extends React.Component<{ tasks: TaskInterface[] }, {}> {
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    );
  }
}

export default Overview;
