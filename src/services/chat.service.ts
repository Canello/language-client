import { CustomError } from "../utils/classes/CustomError";
import { API_ADDRESS } from "../utils/constants";

export const chat = async (messages: Array<Message>, userToken: string) => {
    const res = await fetch(API_ADDRESS + "/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({
            messages,
        }),
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data.reply;
};
