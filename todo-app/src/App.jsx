import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new task
  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  // Remove a task by index
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center ">
        <div className="">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">To-Do List</h3>
            </div>
            <div className="card-body">
              <TodoInput addTodo={addTodo} />
              <TodoList todos={todos} removeTodo={removeTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
