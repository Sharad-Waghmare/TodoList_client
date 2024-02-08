import React from "react";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo = todo.status ? "line-through" : "";
  console.log(todo, "todolist");
  
  const handleCompleteTodo = () => {
    const updatedTodo = { ...todo, status: true };
    updateTodo(updatedTodo);
  };

  return (
    <div className="Card">
      <div className="Card-text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="Card-button">
        <button
          onClick={handleCompleteTodo}
          className={todo.status ? "hide-button" : "Card--button_done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="Card-button_delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
