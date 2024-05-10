import { useDispatch } from "react-redux";
import "./App.css";
import Addtask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { loginSuccess } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  if (token) {
    dispatch(loginSuccess(true));
  }

  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <Addtask />
        <div
          style={{ borderBottom: "1px solid black", marginBottom: "1rem" }}
        ></div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
