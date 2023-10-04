import Axios from "axios";
import { useState } from "react"

export default function Excuse() {
    const [age, setage] = useState([{}])
    const fetchcollege = () => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/party/`).then((res) => {
            setage(res.data)
        })
    };

    const fetchparty = () => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/office/`).then((res) => {
            setage(res.data)
        })
    };

    const fetchoffice = () => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`).then((res) => {
            setage(res.data)
        })
    };

    console.log(age[0].excuse)

    return (
        <div className="App">
            <button onClick={fetchcollege}>college</button>
            <button onClick={fetchparty}>party</button>
            <button onClick={fetchoffice}>office</button>
            {age[0].excuse && <>
                <h1>Excuse :{age[0]?.excuse}</h1></>}

        </div>
    )
}