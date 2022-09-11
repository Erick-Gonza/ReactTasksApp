import { useState } from "react";

const TaskManager = ({ createNewTask }) => {
  const [newTask, setNewtask] = useState("");

  const handleNewTask = (e) => {
    setNewtask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewtask("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-4 row">
      <section className="col-9">
        <input
          type="text"
          placeholder="Enter a new Task"
          value={newTask}
          onChange={handleNewTask}
          className="form-control"
        />
      </section>
      <section className="col-3">
        <button onClick={handleSubmit} className="btn btn-primary ">
          Save Task
        </button>
      </section>
    </form>
  );
};

export default TaskManager;
