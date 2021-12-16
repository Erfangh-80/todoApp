const TodoModel = require("../models/todoModel")
class TodoController {

    async getTodoList(req, res) {
        const todoList = await TodoModel.find();
        if (todoList.length <= 0) {
            return res.status(200).json({ message: " تسکی ثبت نشده است" })
        }
        res.status(200).json(todoList)
    }
    async createTodo(req, res) {

        const { title, description } = req.body;
        try {
            const newTodo = await TodoModel.create({ title, description })
            res.status(201).json(newTodo)
        } catch (err) {
            console.log(err);
        }
    }
    async edittodo(req, res) {
        const todo = await TodoModel.findById({ _id: req.params.id })
        if (!todo) {
            return res.status(404).json({ message: "پیدا نشد" })
        }
        try {
            const editedTodo = await TodoModel.findByIdAndUpdate({ _id: req.params.id }, {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                }
            })
            res.status(201).send(editedTodo)
        } catch (ex) {
            console.log(ex)
        } 
        res.status(400).send({ message: error.message })
    }

    async deletetodo(req, res) {
        try {
            const dd = await TodoModel.findByIdAndDelete({ _id: req.params.id })
            if (dd == null) {
                return res.status(404).json({ message: "پیدا نسشددددددددددد" })
            }
            res.status(200).json({ message: "حذف با موفقیت انجام شد" })
        } catch (ex) {
            console.log(ex);
            return res.status(404).json({ message: "پیدا نسشددددددددددد" })
        }
    }
}
module.exports = new TodoController;