import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [
        { text: 'first task' },
        { text: 'second task' },
        { text: 'third task' },
      ],
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
