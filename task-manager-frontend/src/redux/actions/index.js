import axios from "axios";

// actions.js
export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch(fetchTasksRequest());
    try {
      const response = await axios.get("http://localhost:3001/tasks");
      dispatch(fetchTasksSuccess(response.data));
    } catch (error) {
      dispatch(fetchTasksFailure(error.message));
    }
  };
};

// Thunk action to handle login
export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        credentials
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch(loginSuccess());
    } catch (error) {
      console.error("Login error:", error);
    }
  };
};

// Thunk action to handle logout
export const register = (credentials) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/register", credentials);
      dispatch(loginSuccess());
    } catch (error) {
      console.error("Login error:", error);
    }
  };
};
