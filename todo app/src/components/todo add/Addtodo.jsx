import React, { useState, useEffect, useContext } from "react";
import "./add.css";
import { DataContext } from "../../context/Datacontext";

function Addtodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todos, setTodos } = useContext(DataContext);

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      id: Date.now(),
      complete: false,
      favourite: false,
    };
    setTodos([...todos, newTodo]);

    // Save todos array to local storage
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));

    // Clear input fields after adding todo
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  
  return (
    <div className="add-todo-section">
      <form onSubmit={handleAdd}>
        <div className="input-section">
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-section">
          <input
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="submit-btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
