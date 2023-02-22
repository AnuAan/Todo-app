import React, { useState } from 'react'
import './App.css'



const Todo = () => {


    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const removeTask = (index) => {
        const newTask = [...todos]
        newTask.splice(index, 1)
        setTodos(newTask)
    }
    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>List Your Items Here..✍️ </h2>
            </div>
            <div className="input">
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                <i onClick={() => setTodos([...todos, { text: todo, id: Date.now(), status: false }])} className="fas fa-plus"></i>
            </div>
            <div className="todos">
                {todos.map((obj,index) => {
                    return (
                        <div className="todo">
                            <div className="left">
                                <input onChange={(e) => {
                                    console.log(e.target.checked)
                                    console.log(obj)

                                    setTodos(todos.filter(obj2 => {
                                        if (obj2.id === obj.id) {
                                            obj.status = e.target.checked
                                        }
                                        return obj2
                                    }))

                                }} value={obj.status} type="checkbox" name="" id="" />
                                <p>{obj.text}</p>
                            </div>

                            <div className="right">
                                <i className="fas fa-times" onClick={removeTask}></i>
                            </div>
                        </div>
                    )
                })}
                {todos.map((obj) => {
                    if (obj.status) {
                        return (
                            <>
                                <h1>{obj.text}</h1>
                            </>
                        )
                    }
                })}
            </div>
        </div>
    )
}



export default Todo;