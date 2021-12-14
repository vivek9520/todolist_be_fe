import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import TodoList from "./TodoList";

export default function DashBoard() {
  //   const dispatch = useDispatch();
  const user = useSelector((state) => state.userState);

  //   const loginData = dispatch("userState");

  return <div>{!user.isLogin ? <Navigate to={"/"} /> : <TodoList />}</div>;
}
