import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/addTodo" element={<AddTodo />}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
