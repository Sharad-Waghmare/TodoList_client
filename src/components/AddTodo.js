import React, { useState } from "react";

const AddTodo = ({ saveTodo }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() !== "" && formData.description.trim() !== "") {
      saveTodo(formData);
      setFormData({ name: "", description: "" });
    }
  };

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter todo name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter todo description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
