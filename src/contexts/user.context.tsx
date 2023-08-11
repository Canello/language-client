import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";
import { useApi } from "../hooks/useApi.hook";
import { getUser } from "../services/auth.service";

type User = null | {
    fullName: string;
    email: string;
    freeTrials: number;
    expiresAt: Date;
};

type UserToken = null | string;

type SetUserTokenAndSaveItOnLocalStorageFunction = (userToken: string) => void;

type LogoutFunction = () => void;

interface IUserContextType {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    userToken: UserToken;
    setUserToken: SetUserTokenAndSaveItOnLocalStorageFunction;
    logout: LogoutFunction;
}

// {} is just for easy initialization. In practice, it will never be accessed, as the UserProvider
// component is run at App initialization and will set its value before being accessed by any
// other component.
export const UserContext = createContext<IUserContextType>(
    {} as IUserContextType
);

export const UserProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [user, setUser] = useState<User>(null);
    const [userToken, setUserToken] = useState<UserToken>(null);

    const setUpdatedUser = (updatedUser: User) => setUser(updatedUser);

    const [fetchUser] = useApi(getUser(userToken), {
        onSuccess: setUpdatedUser,
    });

    const setUserTokenAndSaveItOnLocalStorage = (token: string): void => {
        setUserToken(token);
        localStorage.setItem("userToken", token);
    };

    const loadUserToken = (): void => {
        const savedUserToken = localStorage.getItem("userToken");
        setUserToken(savedUserToken);
    };

    const logout: LogoutFunction = () => {
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
