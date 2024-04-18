import React, { useContext, useState, useEffect } from "react";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import "./task.css";
import { DataContext } from "../../context/Datacontext";

function Task({ selectedFilter, searchQuery }) {
  const { todos, setTodos } = useContext(DataContext);
  const [deleted, setDeleted] = useState([]);

  useEffect(() => {

    const storedDeleted = JSON.parse(localStorage.getItem("deletedTodos")) || [];
    setDeleted(storedDeleted);
  }, []); 

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const deletedTodo = todos.find((todo) => todo.id === id);

    // Update the deleted state
    setDeleted([...deleted, deletedTodo]);

    // Update the todos state
    setTodos(updatedTodos);

    // Update local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.setItem("deletedTodos", JSON.stringify([...deleted, deletedTodo]));
  };

  let filteredTodos = todos;

  if (selectedFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.complete);
  } else if (selectedFilter === "favourite") {
    filteredTodos = todos.filter((todo) => todo.favourite);
  } else if (selectedFilter === "deleted") {
    filteredTodos = deleted; 
  }

  // Filter todos based on search query
  if (searchQuery) {
    filteredTodos = filteredTodos.filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleFav = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, favourite: !todo.favourite } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleComplete = (id) => {
    const completeTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(completeTodos);
    localStorage.setItem("todos", JSON.stringify(completeTodos));
  };

  return (
    <>
      {filteredTodos.length === 0 && <div className="no-todos-msg">No todos to display</div>}
      {filteredTodos.map((value, index) => {
        // Check if the current todo is in the deleted array
        const isDeleted = deleted.some((todo) => todo.id === value.id);

        return (
          <div className="task-section" key={index}>
            <div className="task-left-section">
              <h5>{value && value.title}</h5>
              <p>{value && value.description}</p>
            </div>
            <div className="task-icon-section">
              <div className="task-icons">
                <LiaClipboardCheckSolid
                  className="icons"
                  onClick={() => handleComplete(value && value.id)}
                  style={{ color: value && value.complete ? "red" : "black" }}
                />
              </div>
              <div className="task-icons">
                <FaRegHeart
                  className="icons"
                  onClick={() => handleFav(value && value.id)}
                  style={{ color: value && value.favourite ? "red" : "black" }}
                />
              </div>

              {!isDeleted && (
                <div className="task-icons">
                  <FaRegTrashAlt
                    className="icons"
                    onClick={() => handleDelete(value && value.id)}
                    title="Delete"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Task;
