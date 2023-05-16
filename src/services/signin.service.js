import { apiAddress } from "../utils/constants";

export const signIn = async ({ email, password }) => {
    let res = await fetch(apiAddress + "/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    res = await res.json();

    return res.data;
};
