import { CustomError } from "../utils/classes/CustomError";
import { API_ADDRESS } from "../utils/constants";

interface ISignIn {
    email: string;
    password: string;
}
export const signIn = async ({ email, password }: ISignIn) => {
    const res = await fetch(API_ADDRESS + "/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data;
};

interface ISignUp {
    name: string;
    email: string;
    password: string;
}
export const signUp = async ({ name, email, password }: ISignUp) => {
    const res = await fetch(API_ADDRESS + "/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName: name, email, password }),
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data;
};

export const getUser = (userToken: string | null) => async () => {
    const res = await fetch(API_ADDRESS + "/auth/user", {
        headers: {
            Authorization: "Bearer " + userToken,
        },
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data?.user;
};

export const requestPasswordResetLink = async (email: string) => {
    const res = await fetch(API_ADDRESS + "/auth/reset-link", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data.link;
};

export const changePassword = async (
    resetToken: string,
    newPassword: string
) => {
    const res = await fetch(API_ADDRESS + "/auth/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: resetToken, newPassword }),
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.status;
};
