import { useState } from "react";
import { Text } from "./Text";


export default function App() {
    const [showText, setshowText] = useState(false)
    return (
        <div className="App">
            <button
                onClick={() => {
                    setshowText(!showText);
                }}
            >{showText ? 'HIDE TEXT' : 'SHOW TEXT'}
            </button>
            {showText && <Text />}
        </div>
    );
}