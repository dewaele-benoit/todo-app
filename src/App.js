import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className={"App-body"}>
        <p>Todo List</p>
        <p>Add todo</p>
      </div>
    </div>
  );
}

export default App;
