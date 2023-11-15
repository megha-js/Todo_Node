const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getAllTodo } = require("../controllers/getAllTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { getSingleTodo } = require("../controllers/getSingleTodo");
const { updateTodo } = require("../controllers/updateTodo");
const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/all-todos", getAllTodo);
router.get("/single-todo/:id", getSingleTodo);
router.delete("/delete-todo/:id", deleteTodo);
router.put("/update-todo/:id", updateTodo);
module.exports = router;
