import { useState } from "react";
import { Task1 } from "./Task1prps"


export default function Task() {
    const [todolist, setTodolist] = useState([]);
    const [newtask, setNewtask] = useState("");
    const [errorMessage, setErrorMessage] = useState("");



    const handleOnchange = (event) => {
        setNewtask(event.target.value);
        setErrorMessage("")
    };

    const addTask = () => {
        if (newtask.trim() !== "") {
            const task = {
                id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
                taskName: newtask,
                completed: false,
            };
            setTodolist([...todolist, task])
            setNewtask("")
        } else {
            alert("type something")
            setErrorMessage("Type something");
        }
    };
    const deleteTask = (id) => {
        const newTodoList = todolist.filter((task) => task.id !== id);
        setTodolist(newTodoList);

    };
    const toggleCompleted = (id) => {
        setTodolist(todolist.map((task) => {
            if ((task.id === id)) {
                return { ...task, completed: true };
            } else {
                return task;
            }
        })
        );
    };


    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleOnchange} value={newtask} placeholder="type here" />
                <button onClick={addTask}>Task</button>
                <p style={{ color: "red" }}>{errorMessage}</p>

            </div>
            <div className="list">
                {todolist.map((task) => {
                    return <Task1 taskName={task.taskName}
                        id={task.id}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted} />;
                })}
            </div>
        </div>
    );
}