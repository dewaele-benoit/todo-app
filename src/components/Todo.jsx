import React from "react";
import TodoDone from "./TodoDone";

const Todo = ({ todo, handleTodoDone }) => {
  return (
    <>
      <li>
        <TodoDone
          todoDone={todo.done}
          todoId={todo.id}
          handleTodoDone={handleTodoDone}
        />{" "}
        : <b>{todo.name}</b> - {todo.description}
      </li>
    </>
  );
};

export default Todo;
