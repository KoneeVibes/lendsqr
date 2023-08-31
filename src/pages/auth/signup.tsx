import { useContext, useState } from "react";
import { AuthForm } from "../../components/forms/auth"
import { SignUp } from "../../types/app.type";
import { Context } from "../../context";

export const Signup: React.FC<{}> = () => {

    const { isSignedUp, setIsSignedUp } = useContext(Context);
    const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async (data: SignUp) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${BASE_ENDPOINT}/register`, {
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
            alert(`successfully registered: ${res.result.email} to the database`);

        } catch (err) {
            setIsLoading(false);
            console.log(`encountered ${err}`);
        }
    };

    return (
        <AuthForm
            auth={"sign up"}
            isLoading={isLoading}
            component={"p"}
            navigate={{
                message: "Already have an account?",
            }}
            onClick={() => setIsSignedUp(!isSignedUp)}
            onSubmit={onSubmit}
        />
    )
}
