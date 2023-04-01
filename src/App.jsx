import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '', id: 0 },
      tasks: [],
      numOfTasks: 0,
    };
  }

  onInputChange = (e) => {
    const { numOfTasks } = this.state;
    const input = e.target.value;
    this.setState({
      task: {
        text: input,
        id: numOfTasks,
      },
    });
  };

  onSubmitTask = (e) => {
    const { task, tasks, numOfTasks } = this.state;

    e.preventDefault();
    this.setState({
      tasks: tasks.concat(task),
      task: { text: '', id: 0 },
      numOfTasks: numOfTasks + 1,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">
            Task
            <input
              type="text"
              id="taskInput"
              value={task.text}
              onChange={this.onInputChange}
            />
          </label>

          <button type="submit" onClick={this.onSubmitTask}>
            Add
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
