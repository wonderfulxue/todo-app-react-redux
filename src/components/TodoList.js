import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";

// main render function to display todo list
const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (state) => {
  const { visibilityFilter } = state; // extract data from state to subscribe to
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
