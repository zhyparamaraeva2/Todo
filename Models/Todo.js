import mongoose from "mongoose";
// let mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)
export default TodoModel