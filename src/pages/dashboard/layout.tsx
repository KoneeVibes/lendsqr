import { Box, CssBaseline, Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { SideNav } from '../../components/navbars/sidenav/sidenav';
import { TopNav } from '../../components/navbars/topnav/topnav';
import { Context } from '../../context';
import { SideNavHeader } from '../../components/navbars/sidenav/styled';

export const Dashboard: React.FC<{}> = () => {
    const navigate = useNavigate()
    const { isSideNavOpen, setIsSideNavOpen } = useContext(Context)
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
    })

    const handleSideNavOpen = () => {
        setIsSideNavOpen(true);
    };

    const handleSideNavClose = () => {
        setIsSideNavOpen(false);
    };

    const logOut = () => {
        cookies.remove("TOKEN", { path: "/" });
        navigate("/")
    }

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <CssBaseline />
            <TopNav
                isSideNavOpen={isSideNavOpen}
                handleSideNavOpen={handleSideNavOpen}
            />
            <SideNav
                isSideNavOpen={isSideNavOpen}
                handleSideNavClose={handleSideNavClose}
            />
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
                <br />
                <button onClick={logOut} style={{ maxWidth: '100%', overflow: 'hidden' }}>Log Out</button>
            </Box>
        </Box>
    )
}