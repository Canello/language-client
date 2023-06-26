import { useEffect, useState } from "react";

export const useVoice = () => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const loadVoices = () => {
            const englishVoices = speechSynthesis
                .getVoices()
                .filter((voice) => voice.lang.startsWith("en-US"));
            setVoices(englishVoices);
        };

        loadVoices();
        speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    return voices[0];
};
