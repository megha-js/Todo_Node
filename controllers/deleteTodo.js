const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      sucess: true,
      data: response,
      message: "The Above Todo is deleted from the db",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      data: "Todo not deleted",
      message: console.log(err),
    });
  }
};
