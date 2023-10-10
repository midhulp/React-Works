import { useContext } from "react"
import { AppContext } from "../App.js";

import { Change } from "./changeusername";
export const Profile = () => {
    const { username } = useContext(AppContext);

    return (
        <div>
            <Change />
            <h1>This is the profile page and the user is {username}</h1>
        </div>
    )
}