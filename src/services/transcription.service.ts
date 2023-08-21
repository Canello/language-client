import { CustomError } from "../utils/classes/CustomError";
import { API_ADDRESS } from "../utils/constants";

export const transcribe = async (audioBlob: Blob, userToken: string) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.wav");

    const res = await fetch(API_ADDRESS + "/transcription", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + userToken,
        },
        body: formData,
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data.transcription;
};
