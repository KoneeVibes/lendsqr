import { useState } from "react";
import { AuthForm } from "../../components/forms/auth";
import { SignUp } from "../../types/app.type";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export const Login: React.FC<{}> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cookies = new Cookies();
    const navigate = useNavigate();
    const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;

    const onSubmit = async (data: SignUp) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${BASE_ENDPOINT}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                setIsLoading(false);
                throw new Error(`Failed with status ${response.status}`);
            }

            const res = await response.json();

            cookies.set("TOKEN", res.token, {
                path: "/",
                // httpOnly: true,
            });

            cookies.set("USER", res.userInfo, {
                path: "/",
            })
            navigate("/dashboard");

        } catch (err) {
            setIsLoading(false);
            console.log(`encountered ${err}`);
        }
    };

    return (
        <AuthForm
            auth={"login"}
            isLoading={isLoading}
            component={"a"}
            navigate={{
                message: "Forgot PASSWORD?",
                url: "#"
            }}
            onSubmit={onSubmit}
        />
    )
}