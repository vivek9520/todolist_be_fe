import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { register } from "../services/UserService";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleRegister = async () => {
    console.log(this.state);
    await register(this.state.email, this.state.password, this.state.name);
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <br />
        <TextField
          id="outlined-textarea"
          label="E-Mail"
          placeholder="E-Mail"
          multiline
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Password"
          multiline
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />

        <br />
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />
        <br />

        <br />
        <Button variant="outlined" onClick={this.handleRegister}>
          Sign Up
        </Button>
        <p>
          If have account <Link to={"/"}>Login here</Link>
        </p>
      </div>
    );
  }
}
