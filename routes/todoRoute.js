const express = require("express")
const router = express.Router();
const todoController = require("../controllers/todoController")

router.get("/getlist", todoController.getTodoList)
router.post("/createtodo", todoController.createTodo)
router.put("/edittodo/:id", todoController.edittodo)
router.delete("/deletetodo/:id", todoController.deletetodo)

module.exports = router;