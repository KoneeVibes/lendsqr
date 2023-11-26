export type ContextType = {
    isSignedUp: boolean,
    setIsSignedUp: React.Dispatch<React.SetStateAction<boolean>>
    isSideNavOpen: boolean,
    setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export type ContextProviderProps = {
    children: React.ReactNode,
};