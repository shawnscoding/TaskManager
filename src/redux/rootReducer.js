import { combineReducers } from "redux";
import todoReducer from "./todo/todo.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  todoList: todoReducer,
  auth: authReducer
});

export default rootReducer;
