import { apiAddress } from "../utils/constants";

export const transcribe = async (audioBlob, userToken) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.wav");

    let res = await fetch(apiAddress + "/transcription", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + userToken,
        },
        body: formData,
    });
    res = await res.json();

    return res.data.transcription;
};
