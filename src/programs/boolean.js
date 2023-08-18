import { useState } from "react";

export default function Boolean(){
    const[showname,setshowname]=useState(true)

    const changetext= ()=>{
        setshowname(!showname)
    }
    return (
        <div className="App">
        <button onClick={changetext}>show/hide</button>
         {showname ===true &&<h1>hello</h1>}
         </div>
    );
}