import { CustomError } from "../utils/classes/CustomError";
import { API_ADDRESS } from "../utils/constants";

export const transcribe = async (audioBlob, userToken) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.wav");

    let res = await fetch(API_ADDRESS + "/transcription", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + userToken,
        },
        body: formData,
    });
    res = await res.json();
    if (res.error) throw new CustomError(res.error);

    return res.data.transcription;
};
