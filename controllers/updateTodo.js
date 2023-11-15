const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const { todo, description } = req.body;
  const response = await Todo.findByIdAndUpdate(
    { _id: id },
    {
      todo: todo,
      description: description,
      updatedAt: Date.now(),
    }
  );
  if (!response) {
    return res.status(404).json({
      sucess: false,
      data: err,
      message: "error finding the id",
    });
  }
  return res.status(200).json({
    sucess: true,
    data: response,
    message: "The data is fetched an Updated",
  });
};
