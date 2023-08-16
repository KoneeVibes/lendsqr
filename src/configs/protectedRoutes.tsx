import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const ProtectedRoutes = () => {

    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    return (
        token ? <Outlet /> : <Navigate to={"/home"} />
    )
}