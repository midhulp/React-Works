import { useState } from "react";

export default function Stex1(){
    const [age,setage] =useState(5);

    const increaseAge=()=>{
        setage(age + 1);
        console.log(age);
    };

    return (
        <div>
            {age}
            <button onClick={increaseAge}>Increase age</button>
        </div>
    );
}