const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    author: {
        type: String,
        default: 0,
    },
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    }
})

const todoModel = mongoose.model("todo", todoSchema)
module.exports = todoModel;