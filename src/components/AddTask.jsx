import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    text: "",
    day: ""
  });

  const [reminder, setReminder] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.text) {
      alert("Say Something");
    }

    addTask({
      text: task.text,
      day: task.day,
      reminder: reminder
    });

    setTask({
      text: "",
      day: ""
    });

    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Secret Post</label>
        <input
          name="text"
          type="text"
          placeholder="Add Task"
          value={task.text}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>Your Nickname</label>
        <input
          type="text"
          placeholder="Add day"
          name="day"
          value={task.day}
          onChange={handleChange}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Confidentiality agreement</label>
        <input
          type="checkbox"
          name="reminder"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Share Your Secret" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
