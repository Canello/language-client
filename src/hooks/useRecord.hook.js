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
