import { useRef, useState } from "react";
import { Recorder } from "../utils/classes/Recorder";

interface IUseRecord {
    onRecord?: Function;
    onStop?: Function;
}

export const useRecord = ({ onRecord, onStop }: IUseRecord) => {
    const [isRecording, setIsRecording] = useState(false);
    const [hasDeclined, setHasDeclined] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

    const handleRecord = () => {
        setIsRecording(true);
        if (onRecord) onRecord();
    };
    const handleStop = (audioBlob: Blob) => {
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
