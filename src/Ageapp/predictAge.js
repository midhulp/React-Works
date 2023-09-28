import Axios from "axios";
import { useState } from "react"

export default function Age() {
    const [name, setname] = useState("");
    const [age, setage] = useState({})
    const fetchname = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setage(res.data)
        })
    };

    return (
        <div className="App">
            <input onChange={(event) => setname(event.target.value)} />
            <button onClick={fetchname}>Quess Age</button>
            {age.age && <><h1>age:{age?.age}</h1>
                <h1>count:{age?.count}</h1>
                <h1>name:{age?.name}</h1></>}

        </div>
    )
}