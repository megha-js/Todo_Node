const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timeStamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
