import Axios from "axios";
import { useState } from "react"

export default function Age() {
    const [name, setname] = useState("");
    const [age, setage] = useState("")
    const fetchname = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setage(res.data.age)
        })
    };
    return (
        <div className="App">
            <input onChange={(event) => setname(event.target.value)} />
            <button onClick={fetchname}>Quess Age</button>
            <h1>{age && `AGE is ${age}`}</h1>
        </div>
    )
}