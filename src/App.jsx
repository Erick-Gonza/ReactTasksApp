import { useState, useEffect } from "react";
//Components
import TaskManager from "./components/TaskManager.jsx";
import TaskTable from "./components/TaskTable.jsx";
import VisibilityControl from "./components/VisibilityControl.jsx";

function App() {
  const [taskItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
      console.log(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTasksItems([
        ...taskItems,
        {
          name: taskName,
          done: false,
        },
      ]);
    }
  };

  const toggleTask = (task) => {
    setTasksItems(
      taskItems.map((t) =>
        t.name == task.name
          ? {
              ...t,
              done: !t.done,
            }
          : t
      )
    );
  };

  return (
    <main className="bg-dark vh-100 text-white">
      <section className="container col-md-6 p-2">
        <TaskManager createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </section>
    </main>
  );
}

export default App;
