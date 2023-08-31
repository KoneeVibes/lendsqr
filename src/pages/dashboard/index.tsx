import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

export const Dashboard: React.FC<{}> = () => {

    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const [message, setMessage] = useState();
    const navigate = useNavigate()
    const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;

    useEffect(() => {
        fetch(`${BASE_ENDPOINT}/dashboard`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: "include"
        })
            .then((res) => {
                res.json()
                    .then((response) => {
                        setMessage(response.message);
                    })
                    .catch((error) => {
                        console.log('Encountered error', error);
                    })
            })
            .catch((err) => {
                console.log('Unable to connect to server', err);
            })
    })

    const logOut = () => {
        cookies.remove("TOKEN", { path: "/" });
        navigate("/")
    }

    return (
        <div>
            <p>{message}. However, our dashboard is still in the making. Hold on just a little more.</p>
            <br />
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}