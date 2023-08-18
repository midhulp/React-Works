import { useState } from "react";


export default function Task(){
    const [todolist,setTodolist]=useState([]);
    const [newtask,setNewtask]=useState("");
    const [text,setText]=useState("");

    const handleOnchange =(e)=>{        setNewtask(e.target.value);
    };
    const addTask =()=>{
        const task ={
            id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id + 1,
            taskName: newtask,
        };
        setTodolist([...todolist,task])
        setText(" ")
    };
    const deleteTask =(id)=>{
        const newTodoList=todolist.filter((task)=>task.id !== id);
        setTodolist(newTodoList);
    };       
        return (
    <div className="App">
    <div className="addTask">
        <input onChange={handleOnchange} value={setText}/>
    <button onClick={addTask}>Task</button>
    </div>
    <div className="list">
        {todolist.map((task)=>{
            return <div><h1>{task.taskName}</h1>
             <button onClick={()=>deleteTask(task.id)}>x</button></div>;
             
        })}
    </div>
    </div>
    );
}