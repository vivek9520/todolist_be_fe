const express = require("express");
const todoController = require("./../controllers/todoController");

const router = express.Router();

router.post("/api/v1/todo", todoController.createTodo);
router.get("/api/v1/todo", todoController.getAllTodo);
router.get("/api/v1/todo/:id", todoController.getTodo);
router.delete("/api/v1/todo/:id", todoController.deleteTodo);
router.put("/api/v1/todo/:id", todoController.changeStateTodo);

module.exports = router;
