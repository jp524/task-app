import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
    };
  }

  onInputChange = (e) => {
    const input = e.target.value;
    this.setState({
      task: {
        text: input,
      },
    });
    console.log(this.state.task);
  };

  render() {
    const { task } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">
            Task
            <input type="text" id="taskInput" onChange={this.onInputChange} />
          </label>

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
