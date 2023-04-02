import * as React from 'react';
import TaskInterface from '../interfaces/TaskInterface';

interface Props {
  tasks: TaskInterface[];
  onDeleteBtn: React.MouseEventHandler<HTMLButtonElement>;
}

class Overview extends React.Component<Props, {}> {
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.text}
              <button
                type="button"
                key={task.id}
                id={task.id.toString()}
                onClick={this.props.onDeleteBtn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
