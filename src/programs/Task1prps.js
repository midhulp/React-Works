export const Task1 = (props)=>{

return (<div><h1>{props.taskName}</h1>
             <button onClick={()=>props.deleteTask(props .id)}>x</button></div>
             
        );
    };