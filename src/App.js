import "./App.css";
import { TodoDiv } from "./components/todo";

import { Routes, Route } from "react-router-dom";
import { LoginData } from "./components/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoDiv />} />
        <Route path="/login" element={<LoginData />} />
      </Routes>
    </div>
  );
}

export default App;
