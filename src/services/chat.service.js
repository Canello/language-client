import { apiAddress } from "../utils/constants";

export const chat = async (messages, userToken) => {
    let res = await fetch(apiAddress + "/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({
            messages,
        }),
    });
    res = await res.json();

    return res.data.reply;
};
