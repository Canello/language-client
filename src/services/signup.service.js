import { apiAddress } from "../utils/constants";

export const signUp = async ({ name, email, password }) => {
    let res = await fetch(apiAddress + "/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName: name, email, password }),
    });
    res = await res.json();

    return res.data;
};
