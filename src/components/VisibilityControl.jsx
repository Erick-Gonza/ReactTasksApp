const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you wanto to delete it?")) {
      cleanTasks();
    }
  };
  return (
    <section className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <section className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Show Tasks Done</label>
      </section>

      <button onClick={handleDelete} className="btn btn-danger">
        Clear
      </button>
    </section>
  );
};

export default VisibilityControl;
