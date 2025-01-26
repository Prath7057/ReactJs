import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <li className="list-group-item text-center text-muted">
          No tasks available. Add some!
        </li>
      ) : (
        todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{todo}</span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeTodo(index)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
