import { useRef, useState } from "react";
import { useVoice } from "./useVoice.hook";
import { speak } from "../utils/functions/speak";

export const useSpeak = () => {
    const voice = useVoice();

    const cancelSpeaking = useRef(() => {});
    const [isSpeaking, setIsSpeaking] = useState(false);
    const startSpeaking = () => setIsSpeaking(true);
    const stopSpeaking = () => {
        cancelSpeaking.current();
        setIsSpeaking(false);
    };

    const speakFunc = (text) => {
        startSpeaking();
        cancelSpeaking.current = speak(text, voice, stopSpeaking);
    };

    return {
        speak: speakFunc,
        stopSpeaking,
        isSpeaking: isSpeaking,
    };
};
