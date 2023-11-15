const Todo = require("../models/todo");

exports.getAllTodo = async (req, res) => {
  try {
    const response = await Todo.find({});
    res
      .status(200)
      .json({ sucess: true, data: response, message: "Fetched all the todos" });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      data: "Could not fetch the todos",
      message: console.log(err),
    });
  }
};
