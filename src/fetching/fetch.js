import axios from "axios";
import { useEffect, useState } from "react";

export default function Cat() {

    const [fact, setfact] = useState("")
    const catcall = () => {
        axios.get("https://catfact.ninja/fact").then((res) => {
            setfact(res.data.fact);
        });
    };

    useEffect(() => {
        catcall();
    }, []);

    return (
        <div className="App">
            <button onClick={catcall}>CAT FACT</button>
            <p>{fact}</p>
        </div>
    );
}