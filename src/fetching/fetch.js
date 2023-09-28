import Axios from "axios";
import { useEffect, useState } from "react";

export default function Cat() {
    // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
    //     console.log(data);
    // });
    const [fact, setfact] = useState("")
    const catcall = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
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