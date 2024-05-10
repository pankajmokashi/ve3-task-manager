import React from "react";
import axios from "axios";
import { fetchTasks } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function DeleteTask({ id }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      dispatch(fetchTasks());
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  return (
    <>
      {isLoggedIn && (
        <button className="task-btn" onClick={() => deleteTask()}>
          Delete
        </button>
      )}
    </>
  );
}

export default DeleteTask;
