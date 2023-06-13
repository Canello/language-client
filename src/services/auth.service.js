import { API_ADDRESS } from "../utils/constants";

export const signIn = async ({ email, password }) => {
    let res = await fetch(API_ADDRESS + "/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    res = await res.json();

    return res.data;
};

export const signUp = async ({ name, email, password }) => {
    let res = await fetch(API_ADDRESS + "/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName: name, email, password }),
    });
    res = await res.json();

    return res.data;
};

export const getUser = (userToken) => async () => {
    let res = await fetch(API_ADDRESS + "/auth/user", {
        headers: {
            Authorization: "Bearer " + userToken,
        },
    });
    res = await res.json();

    return res.data?.user;
};

export const requestPasswordResetLink = async (email) => {
    let res = await fetch(API_ADDRESS + "/auth/reset-link", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });
    res = await res.json();

    return res.data.link;
};

export const changePassword = async (resetToken, newPassword) => {
    let res = await fetch(API_ADDRESS + "/auth/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: resetToken, newPassword }),
    });
    res = await res.json();

    return res.status;
};
