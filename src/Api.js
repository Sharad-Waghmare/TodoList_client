const axios = require("axios");

const URL = "http://localhost:8005/todo";

const getTodos = async () => {
  try {
    const todos = await axios.get(URL + "/getAlltodo");
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};


const addTodo = async (formData) => {
    try {
      const todo = {
        name: formData.name,
        description: formData.description,
        status: false,
      };
      const saveTodo = await axios.post(URL + "/addtodo", todo);
      return saveTodo;
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateTodo = async (todo) => {
    try {
      const todoUpdate = {
        status: true,
      };
      const updatedTodo = await axios.put(`${URL}/updatetodo/${todo._id}`, todoUpdate);
      console.log(updatedTodo);
      return updatedTodo;
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteTodo = async (_id) => {
    try {
      const deletedTodo = await axios.delete(`${URL}/deletetodo/${_id}`);
      return deletedTodo;
    } catch (error) {
      throw new Error(error);
    }
  };

module.exports = { 
    getTodos ,
    addTodo,
    updateTodo,
    deleteTodo

};
