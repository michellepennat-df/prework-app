import React, { useState, useEffect } from "react";
import "./style.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Leer" },
    { id: 2, text: "Escribir ensayo" },
    { id: 3, text: "Desarrollar app" },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTask.trim() !== "") {
      const newTaskItem = {
        id: Date.now(),
        text: newTask,
      };

      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  useEffect(() => {
    console.log("Todo list updated:", tasks);
  }, [tasks]);

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <br/>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
