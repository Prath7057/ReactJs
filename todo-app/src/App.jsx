import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : []; 
  });

  const addTodo = (task) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, task];
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
      return updatedTodos;
    });
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
      return updatedTodos;
    });
  };

  return (
    <div className="container mt-5" style={{ width: "50%" }}>
      <div className="row justify-content-center align-items-center">
        <div>
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
