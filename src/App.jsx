import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }

  onInputChange = (e) => {
    const input = e.target.value;
    this.setState({
      task: {
        text: input,
      },
    });
  };

  onSubmitTask = (e) => {
    const { task, tasks } = this.state;

    e.preventDefault();
    this.setState({
      tasks: tasks.concat(task),
      task: { text: '' },
    });
    console.log(tasks);
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
      </div>
    );
  }
}

export default App;
