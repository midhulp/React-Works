

export default function Cat() {
    fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
        console.log(data);
    });
    return (
        <div className="App">
            <button>CAT FACT</button>
        </div>
    );
}