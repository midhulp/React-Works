export const Task1 = (props) => {

    return (<div className="task"
        style={{ backgroundColor: props.completed ? "blue" : "red" }}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id)}>x</button>
        <button onClick={() => props.toggleCompleted(props.id)}>completed</button>
    </div>

    );
};