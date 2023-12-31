import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { SideNavHeader } from "../../components/navbars/sidenav/styled";
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import { UsersTable } from "../users/userstable";

export const MainArea = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState();
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;

    useEffect(() => {
        fetch(`${BASE_ENDPOINT}/dashboard`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
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
    }, [BASE_ENDPOINT, token])

    const logOut = () => {
        cookies.remove("TOKEN", { path: "/" });
        navigate("/")
    }

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1, p: 3,
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <SideNavHeader />
            <Typography variant='body1' whiteSpace={'normal'}>{message}. However, our dashboard is still in the making. Hold on just a little more.</Typography>
            <UsersTable />
            <button onClick={logOut} style={{ maxWidth: '100%', overflow: 'hidden' }}>Log Out</button>
        </Box>
    )
}