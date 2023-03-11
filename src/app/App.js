import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { NoMatch } from "../screens/NoMatch";
import { TodoList } from "../screens/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
