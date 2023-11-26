import { SubmitHandler } from "react-hook-form"
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

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

export type TopNavProps = {
    isSideNavOpen: boolean
    handleSideNavOpen: () => void
}

export type TopNavStyledWrapperProps = {
    open?: boolean;
} & MuiAppBarProps; 

export type SideNavProps = {
    isSideNavOpen: boolean
    handleSideNavClose: () => void
}

export type DialogProps = {
    content: {
        icon:any //shouldn't be
        title: string,
    }[];
    isOpen: boolean;
    onClose: () => void;
}