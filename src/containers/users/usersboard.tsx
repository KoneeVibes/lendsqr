import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardHeader, CardContent, Stack } from '@mui/material';
import { boards } from '../../configs/content';
import userConfigs from '../../configs/manageUsers';
import Cookies from "universal-cookie";

export const Usersboard = () => {
    const [users, setUsers] = useState<Record<string, any>[]>([]);
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    useEffect(() => {
        userConfigs.getAllUsers(token)
            .then((res) => {
                setUsers(res.user);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, [token])

    return (
        <Box>
            <Typography
                variant='h1'
                fontFamily={"Work Sans"}
                fontWeight={500}
                fontSize={{ mobile: "24px" }}
                lineHeight={"normal"}
                color={"#213F7D"}
                marginBlock={3}
            >
                Users
            </Typography>
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
                                flex: `1 1 calc(100%/${boards.length})`,
                                border: '1px solid rgba(33, 63, 125, 0.06)',
                                boxShadow: "3px 5px 20px 0px rgba(0, 0, 0, 0.04)",
                            }}
                        >
                            <CardHeader
                                title={
                                    <Typography
                                        variant='h2'
                                        fontFamily={"Work Sans"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "14px" }}
                                        lineHeight={"normal"}
                                        color={"#545F7D"}
                                        marginBlockStart={3}
                                        textTransform={"uppercase"}
                                    >
                                        {board.name}
                                    </Typography>
                                }
                                avatar={board.icon}
                                sx={{
                                    flexDirection: 'column',
                                    alignItems: 'unset'
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant='body1'
                                    fontFamily={"Work Sans"}
                                    fontWeight={600}
                                    fontSize={{ mobile: "24px" }}
                                    lineHeight={"normal"}
                                    color={"#213F7D"}
                                    textTransform={"uppercase"}
                                >
                                    {users.length}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
}