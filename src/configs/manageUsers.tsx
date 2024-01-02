import Cookies from "universal-cookie";

const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;
const cookies = new Cookies();
const loggedInUser = cookies.get("USER");

const getUser = async (token: string, _id?: string) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/dashboard/user/${loggedInUser._id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error(`Failed with status ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(`encountered ${error}`);
    }
}

const getAllUsers = async (token: string) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/dashboard/user`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error(`Failed with status ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(`encountered ${error}`);
    }
}

const userConfigs = {
    getUser, getAllUsers
}

export default userConfigs