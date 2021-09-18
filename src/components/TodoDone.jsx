import React from "react";

const TodoDone = ({ todoDone, todoId, handleTodoDone }) => {
  return (
    <>
      <input
        name="done"
        type="checkbox"
        checked={todoDone}
        onChange={() => handleTodoDone(todoDone, todoId)}
      />
    </>
  );
};

export default TodoDone;
