import React from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <li>
        <b>{todo.name}</b> - {todo.description}
      </li>
    </>
  );
};

export default Todo;
