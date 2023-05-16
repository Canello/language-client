import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState(null);

    const value = {
        user,
        setUser,
        userToken,
        setUserToken,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
