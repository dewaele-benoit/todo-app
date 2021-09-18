import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { name: "Todo1", description: "My todo number one", id: "1" },
    { name: "Todo2", description: "My todo number two", id: "2" },
  ]);
  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {todoList.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
