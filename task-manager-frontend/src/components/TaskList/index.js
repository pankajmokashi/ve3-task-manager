import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteTask from "../DeleteTask";
import { fetchTasks } from "../../redux/actions";
import "./style.css";
import ViewTask from "../Viewtask";
import UpdateTask from "../UpdateTask";

function TaskList() {
  const [showModal, setShowModal] = useState(false);
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="task-container">
      <div>Click on title to view full task.</div>
      {tasks.length > 0 ? (
        tasks.map((ele) => (
          <div className="task" key={ele.id}>
            <div className="task-text">
              <strong
                style={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(true)}
              >
                {ele.title}
              </strong>{" "}
              <span className="hide">- {ele.description}</span>
            </div>
            <div className="btns">
              <UpdateTask task={ele} />
              <DeleteTask id={ele.id} />
            </div>
            {showModal && (
              <ViewTask task={ele} onClose={() => setShowModal(false)} />
            )}
          </div>
        ))
      ) : (
        <div>No Tasks Added</div>
      )}
    </div>
  );
}

export default TaskList;
