import { useState } from "react";

export const useVoice = () => {
    const [voices, setVoices] = useState([]);

    const loadVoices = () => {
        const englishVoices = speechSynthesis
            .getVoices()
            .filter((voice) => voice.lang.startsWith("en-US"));
        setVoices(englishVoices);
    };

    speechSynthesis.onvoiceschanged = loadVoices;

    return voices[0];
};
