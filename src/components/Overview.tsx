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
      <ul className="tasks">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="task">
              <button
                type="button"
                key={task.id}
                id={task.id.toString()}
                onClick={this.props.onDeleteBtn}
              >
                Delete
              </button>
              {task.text}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
