import React, {useEffect, useState} from 'react';
import Create from "./Create.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../redux/todoSlice.js";

import axios from "axios";
import {BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill} from "react-icons/bs";

function Todo() {
    const [todos, setTodos] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('http://localhost:3001/get').then((res) => {
            setTodos(res.data)
        }).catch(err => console.log(err))
    },[]);

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' +id).then((res) => {
            dispatch(toggleComplete(id));
            location.reload()
        }).catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' +id).then((res) => {
            dispatch(deleteTodo(id));
            location.reload()
        }).catch(err => console.log(err))
    }
    return (
        <div className="home">
            <h2> Todo List</h2>
            <Create />
            {
               todos.length ===0  ?
                   <h2> No Records </h2>
                   :
                todos.map((todo) => (
                    <div className="task">
                        <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                            {todo.done
                                ? <BsFillCheckCircleFill className="icon" />
                                : <BsCircleFill className="icon" />}
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div onClick={ () => handleDelete(todo._id)}>
                            <span><BsFillTrashFill className="icon" /> </span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Todo;