import TodoModel from '../models/todoModel';
import todoServices from '../service/service';

class TodoController {

    async getTodoList(req, res) {
        const todoList = await todoServices.getAllTask();
        // const todoList = await TodoModel.find();
        if (todoList.length <= 0) {
            return res.status(200).json({ message: " تسکی ثبت نشده است" })
        }
        res.status(200).json(todoList)
    }

    async createTodo(req, res) {

        const { title, description } = req.body;
        try {
            // const newTodo = await TodoModel.create({ title, description });
            const newTodo = await todoServices.CreateTask(title,description);
            res.status(201).json(newTodo)
        } catch (err) {
            console.log(err);
        }
    }

    async edittodo(req, res) {
        // const todo = await TodoModel.findById({ _id: req.params.id });
        const todo = await todoServices.FindByIdForUpdate(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "پیدا نشد" })
        }
        try {
            // const editedTodo = await TodoModel.findByIdAndUpdate({ _id: req.params.id }, {
            //     $: {
            //         title: req.body.title,
            //         description: req.body.description,
            //     }
            // })
            const editedTodo = await todoServices.UpdateTask(req.body.id,req.body.title,req.body.description);

            res.status(201).send(editedTodo)
        } catch (ex) {
            console.log(ex)
        } 
        res.status(400).send({ message: error.message })
    }

    async deletetodo(req, res) {
        try {
            // const id = await TodoModel.findByIdAndDelete({ _id: req.params.id })
            const id = await todoServices.getByIdFromDelete(req.params.id);
            if (id == null) {
                return res.status(404).json({ message: "پیدا نسشدد" })
            }
            res.status(200).json({ message: "حذف با موفقیت انجام شد" })
        } catch (ex) {
            console.log(ex);
            return res.status(404).json({ message: "پیدا نسشدد" })
        }
    }
}
module.exports = new TodoController;
