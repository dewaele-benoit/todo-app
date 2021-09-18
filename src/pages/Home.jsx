import React from "react";
import TodoList from "../components/TodoList";
import { useHistory } from "react-router-dom";

const Home = ({ todoList, handleTodoDone }) => {
  const history = useHistory();
  return (
    <>
      <TodoList todoList={todoList} handleTodoDone={handleTodoDone} />
      <button
        onClick={() => {
          history.push("/addTodo");
        }}
      >
        Add todo
      </button>
    </>
  );
};

export default Home;
