import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./store/todo/todoAction";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleSaveTodo = (formData) => {
    dispatch(addTodo(formData))
      .unwrap()
      .then(() => dispatch(getTodos()))
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo))
      .unwrap()
      .then(() => dispatch(getTodos()))
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id) => {
    dispatch(deleteTodo(_id))
      .unwrap()
      .then(() => dispatch(getTodos()))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      

      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default App;
