import { useRef, useState } from "react";

// Main
export const useRecord = (stopSpeaking) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [isRecordingAllowed, setIsRecordingAllowed] = useState(true);
    const mediaRecorder = useRef(null);

    const startRecording = async () => {
        if (!isRecordingAllowed) return;

        if (!mediaRecorder.current) {
            const isAllowed = await setupRecorder(mediaRecorder, setAudioBlob);
            setIsRecordingAllowed(isAllowed);
            if (!isAllowed) return;
        }

        if (stopSpeaking) stopSpeaking();
        setIsRecording(true);
        mediaRecorder.current.start();
    };

    const stopRecording = () => {
        setIsRecording(false);
        mediaRecorder.current.stop();
    };

    return {
        startRecording,
        stopRecording,
        isRecording,
        audioBlob,
        isRecordingAllowed,
    };
};

// Functions
async function setupRecorder(mediaRecorder, setAudioBlob) {
    let audioChunks = [];
    let stream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        });
    } catch (err) {
        return false;
    }
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
    });

    mediaRecorder.current.addEventListener("stop", async () => {
        const audioBlob = new Blob(audioChunks);
        setAudioBlob(audioBlob);
        audioChunks = [];
    });

    return true;
}
