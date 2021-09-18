import React from "react";
import AddTodo from "../components/AddTodo";
import { useHistory } from "react-router";

const PageAddTodo = ({ handleAddTodo }) => {
  const history = useHistory();
  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <button
        onClick={() => {
          history.push("/home");
        }}
      >
        Back to home
      </button>
    </>
  );
};

export default PageAddTodo;
