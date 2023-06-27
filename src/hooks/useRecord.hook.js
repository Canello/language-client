import { useRef, useState } from "react";
import { Recorder } from "../utils/classes/Recorder";

export const useRecord = ({ onRecord, onStop }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [hasDeclined, setHasDeclined] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);

    const handleRecord = () => {
        setIsRecording(true);
        if (onRecord) onRecord();
    };
    const handleStop = (audioBlob) => {
        setIsRecording(false);
        setAudioBlob(audioBlob);
        if (onStop) onStop();
    };
    const handleDecline = () => setHasDeclined(true);

    const recorder = useRef(
        new Recorder({
            onRecord: handleRecord,
            onStop: handleStop,
            onDecline: handleDecline,
        })
    );

    return {
        record: recorder.current.record.bind(recorder.current),
        stopRecording: recorder.current.stop.bind(recorder.current),
        isRecording,
        hasDeclined,
        audioBlob,
    };
};

// // Main
// export const useRecord = (stopSpeaking) => {
//     const [isRecording, setIsRecording] = useState(false);
//     const [audioBlob, setAudioBlob] = useState(null);
//     const [isRecordingAllowed, setIsRecordingAllowed] = useState(true);
//     const mediaRecorder = useRef(null);

//     const startRecording = async () => {
//         if (!isRecordingAllowed) return;

//         if (!mediaRecorder.current) {
//             const isAllowed = await setupRecorder(mediaRecorder, setAudioBlob);
//             setIsRecordingAllowed(isAllowed);
//             if (!isAllowed) return;
//         }

//         if (stopSpeaking) stopSpeaking();
//         setIsRecording(true);
//         mediaRecorder.current.start();
//     };

//     const stopRecording = () => {
//         setIsRecording(false);
//         mediaRecorder.current.stop();
//     };

//     return {
//         startRecording,
//         stopRecording,
//         isRecording,
//         audioBlob,
//         isRecordingAllowed,
//     };
// };

// // Functions
// async function setupRecorder(mediaRecorder, setAudioBlob) {
//     let audioChunks = [];
//     let stream;
//     try {
//         stream = await navigator.mediaDevices.getUserMedia({
//             audio: true,
//             video: false,
//         });
//     } catch (err) {
//         return false;
//     }
//     mediaRecorder.current = new MediaRecorder(stream);

//     mediaRecorder.current.addEventListener("dataavailable", (event) => {
//         audioChunks.push(event.data);
//     });

//     mediaRecorder.current.addEventListener("stop", async () => {
//         const audioBlob = new Blob(audioChunks);
//         setAudioBlob(audioBlob);
//         audioChunks = [];
//     });

//     return true;
// }
