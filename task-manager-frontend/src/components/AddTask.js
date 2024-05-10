import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions";

function AddTaskModal({ isLoggedIn, onClose }) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const addTask = async () => {
    try {
      await axios.post("http://localhost:3001/tasks", newTask);
      setNewTask({ title: "", description: "" });
      dispatch(fetchTasks());
      onClose();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="modal">
      <div className="container">
        <h2>Add New Task</h2>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
        </div>
        <div>
          <button onClick={addTask}>Add Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function AddTask() {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="add-task-btn">
      <h2>Tasks</h2>
      {isLoggedIn ? (
        <button onClick={() => setShowModal(true)}>Add Task</button>
      ) : (
        <p>Please login for add or update tasks!</p>
      )}

      {showModal && (
        <AddTaskModal
          isLoggedIn={isLoggedIn}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default AddTask;
