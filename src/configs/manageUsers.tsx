const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;

const getUser = async (token: String, { _id }: { _id: String, token: String }) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/dashboard/user/${_id}`, {
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

const getAllUsers = async (token: String) => {
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