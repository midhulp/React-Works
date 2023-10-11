import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const Tan = () => {
    const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data</p>;
    }

    console.log(data);

    return (
        <><h1>cat fact: {data?.fact}</h1><button onClick={refetch}>Update</button></>);

};
