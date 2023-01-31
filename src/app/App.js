import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { TodoList } from "../screens/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
