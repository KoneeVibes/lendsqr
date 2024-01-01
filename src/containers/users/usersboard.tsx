import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardHeader, CardContent, Stack } from '@mui/material';
import { boards } from '../../configs/content';
import userConfigs from '../../configs/manageUsers';
import Cookies from "universal-cookie";

export const Usersboard = () => {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const [users, setUsers] = useState<Record<string, any>[]>([]);

    useEffect(() => {
        userConfigs.getAllUsers(token)
            .then((res) => {
                setUsers(res.message);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, [token])

    return (
        <Box>
            <Typography>Users</Typography>
            <Stack
                direction={"row"}
                spacing={4}
                justifyContent={"space-between"}
            >
                {boards.map((board, i) => {
                    return (
                        <Card
                            key={i}
                            sx={{
                                flex: `1 1 calc(100%/${boards.length})`
                            }}
                        >
                            <CardHeader
                                title={board.name}
                                avatar={board.icon}
                                sx={{
                                    flexDirection: 'column',
                                    alignItems: 'unset'
                                }}
                            />
                            <CardContent>
                                {users.length}
                            </CardContent>
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
}