import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { register } from "../services/UserService";
import { Link, useNavigate } from "react-router-dom";
import { createTodo } from "../services/todoService";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const [state, setState] = useState("false");

  const HandleCreateTodo = async () => {
    try {
      let response = await createTodo(todo, state);
      console.log(response);
    } catch (error) {}
  };

  return (
    <div>
      <div>
        <div className="container">
          <h1>Create Todo List</h1>
          <br />
          <TextField
            id="outlined-textarea"
            label="To Do"
            placeholder="To Do"
            multiline
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <br />
          <br />
          <br />

          {/* <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Password"
            multiline
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /> */}
          <br />
          <br />

          <br />

          <Button variant="outlined" onClick={HandleCreateTodo}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
