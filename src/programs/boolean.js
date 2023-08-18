import { useState } from "react";

export default function Boolean(){
    const[showname,setshowname]=useState(true)
    const[color,setcolor]=useState("")

    const changetext= ()=>{
        setshowname(!showname)
    }

    const colorchange= ()=>{
        {showname===true && setcolor(color === "black" ? "red":"black")}
    }
    return (
        <div className="App">
        <button onClick={changetext}>show/hide</button>
        <button onClick={colorchange}>Switch color</button>
         {showname ===true &&<h1 style={{color:color}}>hello</h1>}
         </div>
    );
}