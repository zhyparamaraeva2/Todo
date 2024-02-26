import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import TodoModel from "./Models/Todo.js"



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todolist', {

});

app.get('/get', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({_id: id})
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task:task
    })
        .then(result => res.json(result))
        .catch(err=> console.log(err))
})

app.listen(3001, () => {
    console.log('listening on port 3001')
});