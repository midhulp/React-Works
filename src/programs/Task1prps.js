export const Task1 = (props) => {

    return (<div className="task"
        style={{ backgroundColor: props.completed ? "green" : "white" }}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id)}>x</button>
        <button onClick={() => props.toggleCompleted(props.id)}>{props.completed ? ' not complete' : 'complete'}</button>
    </div>

    );
};