import { useState } from "react";


export default function Task(){
    const [todolist,setTodolist]=useState([]);
    const [newtask,setNewtask]=useState("");
    const [addtask,setAddtask]=useState([]);

    const handleOnchange =(e)=>{
        setNewtask(e.target.value);
    };
    const addTask =()=>{
        const newTodolist=[...todolist,newtask];
        setTodolist(newTodolist)
    }
    return (
    <div className="App">
    <div className="addTask">
        <input onChange={handleOnchange}/>
    <button onClick={addTask}>Task</button>
    </div>
    <div className="list">
        {todolist.map((t)=>{
            return <h1>{t}</h1>;
        })}
    </div>
    </div>
    );
}