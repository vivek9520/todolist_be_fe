import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllTodo, deleteTodo, updateTodo } from "../services/todoService";
import { Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";

export default function TodoList() {
  const [todo, setTodo] = useState("");

  useEffect(async () => {
    let response = await getAllTodo();
    setTodo(response.data);
    console.log(response);
  }, []);

  const handleDeleteTodo = async (id) => {
    try {
      let response = await deleteTodo(id);
      console.log(response);
    } catch (error) {}
  };

  const handleUpdateTodo = async (id, state) => {
    try {
      let x = state;
      x = !x;
      let response = await updateTodo(id, x);
      console.log(response);
    } catch (error) {}
  };
  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>To Does</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Delete Action</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todo &&
              todo.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.todo}
                  </TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteTodo(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      variant="outlined"
                      onClick={() => handleUpdateTodo(row._id, row.state)}
                    >
                      Change State
                    </Button>
                  </TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Link to={"/addTodo"}>
        <Button variant="outlined">Create New Todo</Button>
      </Link>
    </div>
  );
}
