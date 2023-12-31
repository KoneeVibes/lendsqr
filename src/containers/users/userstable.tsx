import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import userConfigs from "../../configs/manageUsers";
import Cookies from "universal-cookie";

export const UsersTable = () => {
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
            {users?.map((user: any, k) => <p key={k}>{user.personalInfo.email}</p>)}
        </Box>
    )
}