import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <div className={"App-body"}>
        <TodoList />
        <p>Add todo</p>
      </div>
    </div>
  );
}

export default App;
