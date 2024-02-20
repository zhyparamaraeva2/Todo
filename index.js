const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const TodoModel = require('./Models/Todo')

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