import { createContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi.hook";
import { getUser } from "../services/auth.service";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState(null);

    const setUpdatedUser = (updatedUser) => setUser(updatedUser);

    const [fetchUser] = useApi(getUser(userToken), {
        onSuccess: setUpdatedUser,
    });

    const setUserTokenAndSaveItOnLocalStorage = (token) => {
        setUserToken(token);
        localStorage.setItem("userToken", token);
    };

    const loadUserToken = () => {
        const savedUserToken = localStorage.getItem("userToken");
        setUserToken(savedUserToken);
    };

    const logout = () => {
        localStorage.removeItem("userToken");
        setUserToken(null);
        setUser(null);
    };

    // Load saved user token when app starts up
    useEffect(() => {
        loadUserToken();
    }, []);

    // Get user from server everytime the token changes
    useEffect(() => {
        if (userToken) fetchUser();
    }, [userToken]);

    const value = {
        user,
        setUser,
        userToken,
        setUserToken: setUserTokenAndSaveItOnLocalStorage,
        logout,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
