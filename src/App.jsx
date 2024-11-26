import "./App.css";
import { tasks } from "./assets/tasks";
console.log(tasks.length);

function Task({ task }) {
  const { title, priority, estimatedTime, state } = task;
  return (
    <div className="mb-5">
      <div>
        <ul>
          <li className="bold">{title}</li>
          <li>Priority:{priority}</li>
          <li>Est. time {estimatedTime}</li>
        </ul>
        <button>{state}</button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header-bg">
      <h1>Task Manager</h1>
    </header>
  );
}

function Main() {
  const currentTasks = [];
  const completedTasks = [];

  tasks.forEach((task) => {
    if (task.state.includes("completed")) {
      completedTasks.push(task);
    } else {
      currentTasks.push(task);
    }
  });

  return (
    <main>
      <h2>Task completate: ({completedTasks.length})</h2>
      {completedTasks.map((completedTask) => (
        <Task key={completedTask.id} task={completedTask} />
      ))}
      <h2>Task completate: ({currentTasks.length})</h2>
      {currentTasks.map((currentTask) => (
        <Task key={currentTask.id} task={currentTask} />
      ))}
    </main>
  );
}

function App() {
  return [<Header />, <Main />];
}

export default App;
