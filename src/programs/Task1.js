import { useState } from "react";


export default function Task(){
    const [todolist,setTodolist]=useState([]);
    const [newtask,setNewtask]=useState("");

    const handleOnchange =(e)=>{        setNewtask(e.target.value);
    };
    const addTask =()=>{
        setTodolist([...todolist,newtask])
    };
    const deleteTask =(taskname)=>{
        const newTodoList=todolist.filter((task)=>task !== taskname);
        setTodolist(newTodoList);
    };              
        return (
    <div className="App">
    <div className="addTask">
        <input onChange={handleOnchange}/>
    <button onClick={addTask}>Task</button>
    </div>
    <div className="list">
        {todolist.map((task)=>{
            return <div><h1>{task}</h1>
             <button onClick={()=>deleteTask(task)}>x</button></div>;
        })}
    </div>
    </div>
    );
}