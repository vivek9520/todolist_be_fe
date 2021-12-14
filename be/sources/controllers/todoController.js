const Todo = require("./../models/todo");

//create todos
module.exports.createTodo = async (req, res, next) => {
  try {
    const newTodo = await Todo.create({
      todo: req.body.todo,
      state: req.body.state,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get all todo
module.exports.getAllTodo = async (req, res, next) => {
  try {
    const response = await Todo.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get single todo
module.exports.getTodo = async (req, res, next) => {
  try {
    const response = await Todo.findById(req.params.id);
    res.status(200).json(response);
  } catch (error) {}
};

//delete todo
module.exports.deleteTodo = async (req, res, next) => {
  try {
    const response = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted todo id is " + response._id);
  } catch (error) {}
};

module.exports.changeStateTodo = async (req, res, next) => {
  try {
    const singleResponse = await Todo.findById(req.params.id);

    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        state: req.body.state,
      },
      { new: true }
    );

    res.status(200).json(updateTodo);
  } catch (error) {}
};
