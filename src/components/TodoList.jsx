import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleTodoDone }) => {
  return (
    <>
      <h2>Todo list</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} handleTodoDone={handleTodoDone} />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
