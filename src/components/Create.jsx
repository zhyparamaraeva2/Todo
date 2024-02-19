import React, {useState} from 'react';
import axios from "axios";
import {addTodo} from "../redux/todoSlice.js";
import {useDispatch} from "react-redux";

function Create() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task}).then((res) => {
            dispatch(addTodo(task));
            location.reload();
        }).catch(err => console.log(err))
    }

    return (
        <div className="create_form">
            <input type="text" id="new-item" placeholder= "Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="button" id="submit-btn" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;