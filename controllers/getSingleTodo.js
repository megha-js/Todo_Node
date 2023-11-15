const Todo = require("../models/todo");

exports.getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findById({ _id: id });
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
      message: "Sucessfully fetched the data",
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      sucess: false,
      data: err,
      message: "error finding the id",
    });
  }
};
