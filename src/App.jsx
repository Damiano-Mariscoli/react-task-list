import "./App.css";
import { tasks } from "./assets/tasks";
function App() {
  return (
    <>
      <header className="header-bg">
        <h1>Task Manager</h1>
      </header>

      <main>
        {tasks
          .filter((task) => [task.state].includes("completed"))
          .map((completedTasks) => (
            <div className="mb-5" key={completedTasks.id}>
              <div>
                <ul>
                  <li className="bold">{completedTasks.title}</li>
                  <li>Priority:{completedTasks.priority}</li>
                  <li>Est. time {completedTasks.estimatedTime}</li>
                </ul>
                <button>Completed</button>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}

export default App;
