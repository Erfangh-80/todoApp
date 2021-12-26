import todoModel from '../models/todoModel';

async function getAllTask(){
    const todo = await todoModel.find();
    return todo;
}

async function CreateTask(title, description) {
    const newTask = await todoModel.create({title,description});
    return newTask;
}

async function FindByIdForUpdate(id){
    const idTask =  todoModel.findById(id);
    return idTask;
}

async function UpdateTask(id, title, description){
    const editTask = todoModel.findByIdAndUpdate(id,{
        $: {
            title: title,
            description: description,
        }
    })
    return editTask;
}


async function getByIdFromDelete(id){
    const todoId = todoModel.findByIdAndDelete({_id: id});
    return todoId;
}