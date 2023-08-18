import { useState } from "react";

export default function Change(){
    const [value,setValue]= useState("")

    const changevalue = (event)=>{
        setValue(event
            .target.value);
    }



    return(
        <div className="App">
            <input type="text" onChange={changevalue}/>            
              <div style={{background:'yellow'}}>{value}</div>  
            
        </div>

    );
}