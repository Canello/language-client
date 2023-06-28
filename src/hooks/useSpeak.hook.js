import { useRef, useState } from "react";
import { Speaker } from "../utils/classes/Speaker";

export const useSpeak = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speaker = useRef(
        new Speaker({
            onSpeak: () => setIsSpeaking(true),
            onStop: () => setIsSpeaking(false),
        })
    );

    return {
        speak: speaker.current.speak.bind(speaker.current),
        stopSpeaking: speaker.current.stop.bind(speaker.current),
        isSpeaking,
    };
};
