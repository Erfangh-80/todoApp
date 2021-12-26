import express from 'express';
import todoController from '../contorollers/todoController'

const router = express.Router();


router.get("/getlist", todoController.getTodoList)
router.post("/createtodo", todoController.createTodo)
router.put("/edittodo/:id", todoController.edittodo)
router.delete("/deletetodo/:id", todoController.deletetodo)

module.exports = router;