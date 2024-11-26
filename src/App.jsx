import "./App.css";
import { tasks } from "./assets/tasks";
console.log(tasks);

function Task({ task }) {
  const { title, priority, estimatedTime } = task;
  return (
    <div className="mb-5">
      <div>
        <ul>
          <li className="bold">{title}</li>
          <li>Priority:{priority}</li>
          <li>Est. time {estimatedTime}</li>
        </ul>
        <button>Completed</button>
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
  const filter = true;
  const filteredTasks = filter
    ? tasks.filter((task) => task.state.includes("completed"))
    : tasks;

  return (
    <main>
      {filteredTasks.map((completedTask) => (
        <Task key={completedTask.id} task={completedTask} />
      ))}
    </main>
  );
}

function App() {
  return [<Header />, <Main />];
}

export default App;
