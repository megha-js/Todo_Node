const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { todo, description } = req.body;
    const response = await Todo.create({ todo, description });
    res
      .status(200)
      .json({ sucess: true, data: response, message: "Data Inserted into Db" });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      data: "internal server error",
      message: console.error(err),
    });
  }
};
