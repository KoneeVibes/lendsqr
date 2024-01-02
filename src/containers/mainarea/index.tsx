import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { SideNavHeader } from "../../components/navbars/sidenav/styled";
import Cookies from "universal-cookie";
import { UsersTable } from "../users/userstable";
import { Usersboard } from "../users/usersboard";

export const MainArea = () => {
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

    return (
        <Box
            component="main"
            sx={{
                flex: "1 0 auto",
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    top: "0",
                    padding: 3,
                    outline: 0,
                    height: "100%",
                    width: "stretch",
                    overflowY: "auto",
                }}
            >
                <SideNavHeader />
                <Typography variant='body1' whiteSpace={'normal'}>{message}. However, our dashboard is still in the making. Hold on just a little more.</Typography>
                <Usersboard />
                <UsersTable />
            </Box>
        </Box>
    )
}