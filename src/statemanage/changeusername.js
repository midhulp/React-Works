import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App.js";


export const Change = () => {
    const { setusername } = useContext(AppContext);

    const [name, setname] = useState("");
    console.log(name);
    return (
        <div className="change">
            <input onChange={(event) => { setname(event.target.value); }} />


            <button onClick={() => { setusername(name); }}>change</button>

        </div>
    )
}