import TaskInterface from './TaskInterface';

interface App {
  task: TaskInterface;
  tasks: TaskInterface[];
  numOfTasks: number;
}

export default App;
