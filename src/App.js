import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todoList, setTodoList] = useState([
    { name: "Todo1", description: "My todo number one", done: true, id: 1 },
    { name: "Todo2", description: "My todo number two", done: false, id: 2 },
  ]);
  const handleTodoDone = (done, id) => {
    const findIndexTodo = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = [...todoList];
    newTodoList[findIndexTodo].done = !done;
    setTodoList(newTodoList);
  };
  const handleAddTodo = (name, description) => {
    const newTodo = { name, description, done: false, id: todoList.length + 1 };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <Header />
      <div className={"App-body"}>
        <TodoList todoList={todoList} handleTodoDone={handleTodoDone} />
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
