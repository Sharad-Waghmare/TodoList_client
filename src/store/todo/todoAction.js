import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://todo-list-server-ylgb.vercel.app/todo";


console.log("hello world")
export const addTodo = createAsyncThunk(
  "addTodo",
  async (todoData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${URL}/addtodo`,
        todoData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const getTodos = createAsyncThunk(
  "getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${URL}/getAlltodo`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const updateTodo = createAsyncThunk(
  "todos/updateTodo",

  async (todoData, { rejectWithValue }) => {
    try {
      const { _id, name, description, status } = todoData;
      console.log(todoData, "submit")
      const response = await axios.put(
        `${URL}/updatetodo/${_id}`,
        { name, description, status }
      );
      const updatedTodo = response.data; 
      console.log(updatedTodo);
      return updatedTodo;
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);


export const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${URL}/deletetodo/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
