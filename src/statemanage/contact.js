import { useContext } from "react"
import { AppContext } from "../App.js";


export const Contact = (props) => {
    const { username } = useContext(AppContext);

    return (
        <h1>This is the Contact page and the user is {username}</h1>)
}