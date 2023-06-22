import { CustomError } from "../utils/classes/CustomError";
import { API_ADDRESS } from "../utils/constants";

export const chat = async (messages, userToken) => {
    let res = await fetch(API_ADDRESS + "/chat", {
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
    if (res.error) throw new CustomError(res.error);

    return res.data.reply;
};
