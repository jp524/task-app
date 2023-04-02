import * as React from 'react';
import './App.css';
import Overview from './components/Overview';

import TaskInterface from './interfaces/TaskInterface';

interface State {
  task: TaskInterface;
  tasks: TaskInterface[];
  numOfTasks: number;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      task: { text: '', id: 0 },
      tasks: [
        { text: 'First task', id: 0 },
        { text: 'Second task', id: 1 },
      ],
      numOfTasks: 2,
    };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { numOfTasks } = this.state;
    const input = e.target.value;
    this.setState({
      task: {
        text: input,
        id: numOfTasks,
      },
    });
  };

  onSubmitTask = (e: React.SyntheticEvent) => {
    const { task, tasks, numOfTasks } = this.state;

    e.preventDefault();
    this.setState({
      tasks: tasks.concat(task),
      task: { text: '', id: 0 },
      numOfTasks: numOfTasks + 1,
    });
  };

  // Type of 'e' to be confirmed
  onDeleteTask = (e) => {
    const { tasks } = this.state;
    const taskIndex = e.target.id;
    this.setState({
      tasks: tasks.filter((task) => task.id != taskIndex),
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>React Task App</h1>
        </div>

        <div className="content">
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor="taskInput">
              Task
              <input
                type="text"
                id="taskInput"
                value={task.text}
                onChange={this.onInputChange}
              />
            </label>
            <input type="submit" value="Add" />
          </form>
          <Overview tasks={tasks} onDeleteBtn={this.onDeleteTask} />
        </div>

        <div className="footer">
          <p>Copyright © JP 2023</p>
          <a href="https://www.theodinproject.com/lessons/javascript-handle-inputs-and-render-lists">
            The Odin Project
          </a>
        </div>
      </div>
    );
  }
}

export default App;
