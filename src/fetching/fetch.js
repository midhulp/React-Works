import Axios from "axios";

export default function Cat() {
    // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
    //     console.log(data);
    // });

    Axios.get("https://catfact.ninja/fact").then((res) => {
        console.log(res.data);
    });
    return (
        <div className="App">
            <button>CAT FACT</button>
        </div>
    );
}