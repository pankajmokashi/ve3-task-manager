import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions";

function UpdateTaskModal({ task, onClose }) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    title: task.title,
    description: task.description,
  });

  const updateTask = async () => {
    try {
      await axios.put(`http://localhost:3001/tasks/${task.id}`, newTask);
      //   setNewTask({ title: "", description: "" });
      dispatch(fetchTasks());
      onClose();
    } catch (error) {
      console.error("Error updating task:", error);
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
          <button onClick={updateTask}>Update Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function UpdateTask({ task }) {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {isLoggedIn && <button onClick={() => setShowModal(true)}>Update</button>}

      {showModal && (
        <UpdateTaskModal
          task={task}
          isLoggedIn={isLoggedIn}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default UpdateTask;
