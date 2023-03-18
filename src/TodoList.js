import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (newTodo) => {
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
    };
    setTodos([...todos, newTodoItem]);
  };

  const handleTodoUpdate = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <TodoListContainer>
      <h2>Todo List</h2>
      <TodoForm onNewTodoSubmit={handleNewTodoSubmit} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoUpdate={handleTodoUpdate}
          onTodoDelete={handleTodoDelete}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
