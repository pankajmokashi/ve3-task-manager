import React from "react";
import "./style.css";

function ViewTask({ task, onClose }) {
  return (
    <div className="view-modal">
      <div className="container">
        <div className="title">{task.title}</div>
        <div>
          <strong>Description</strong> - {task.description}
        </div>
        <div className="btns">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
