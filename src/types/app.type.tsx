import { SubmitHandler } from "react-hook-form"

export type SignUp = {
    email: string,
    password: string,
}

export type AuthFormType = {
    auth: string,
    isLoading: boolean,
    component: React.ElementType<any>,
    navigate: {
        message: string,
        url?: string,
    }
    onClick?: () => void,
    onSubmit: SubmitHandler<SignUp>,
}