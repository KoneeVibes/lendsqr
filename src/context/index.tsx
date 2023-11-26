import { createContext, useState } from "react"
import { ContextProviderProps, ContextType } from "../types/context.type"

export const Context = createContext({} as ContextType)

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

    const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(true);

    return (
        <Context.Provider value={{ isSignedUp, setIsSignedUp, isSideNavOpen, setIsSideNavOpen }}>
            {children}
        </Context.Provider>
    )
}