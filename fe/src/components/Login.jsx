import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { login } from "../services/UserService";

import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../actions/userAction";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.userState);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      let response = await login(email, password);
      dispatch(saveUser(response.data));
      console.log(response);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <h1>Log in</h1>
        <br />
        <TextField
          id="outlined-textarea"
          label="E-Mail"
          placeholder="E-Mail"
          multiline
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Password"
          multiline
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <br />

        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
      </div>
      <p>
        If don't have account <Link to={"/register"}>Register here</Link>
      </p>
    </div>
  );
}
