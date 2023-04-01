import * as React from 'react';
import './App.css';
import Overview from './components/Overview';
import AppInterface from './interfaces/AppInterface';

class App extends React.Component<{}, AppInterface> {
  constructor(props: any) {
    super(props);

    this.state = {
      task: { text: '', id: 0 },
      tasks: [],
      numOfTasks: 0,
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

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
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
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
