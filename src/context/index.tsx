import { createContext, useState } from "react";
import { ContextProviderProps, ContextType } from "../types/context.type";
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "../theme";

export const Context = createContext({} as ContextType)

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

    const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(
        useMediaQuery(theme.breakpoints.up('laptop')) ? true : false
    );

    return (
        <Context.Provider value={{ isSignedUp, setIsSignedUp, isSideNavOpen, setIsSideNavOpen }}>
            {children}
        </Context.Provider>
    )
}