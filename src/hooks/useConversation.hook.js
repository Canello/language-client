import { useEffect, useRef } from "react";
import { useSpeak } from "./useSpeak.hook";
import { useRecord } from "./useRecord.hook";
import { useApi } from "./useApi.hook";
import { transcribe } from "../services/transcription.service";
import { chat } from "../services/chat.service";
import { ConversationMemory } from "../utils/classes/ConversationMemory";

export const useConversation = (onCreditsEnd) => {
    const messages = useRef(new ConversationMemory());

    const onError = (error) => {
        if (error.type === "no_credits") onCreditsEnd();
    };

    const { speak, stopSpeaking, isSpeaking } = useSpeak();

    const { record, stopRecording, isRecording, audioBlob, hasDeclined } =
        useRecord({ onRecord: stopSpeaking });

    const [
        fetchTranscription,
        transcription,
        isLoadingTranscription,
        errorTranscription,
    ] = useApi(transcribe, { initialData: "", onError });

    const [
        fetchGptResponse,
        gptResponse,
        isLoadingGptResponse,
        errorGptResponse,
    ] = useApi(chat, { initialData: "", onError });

    // Transcribe audio to text everytime a new audio is recorded
    useEffect(() => {
        if (!audioBlob) return;
        fetchTranscription(audioBlob);
    }, [audioBlob]);

    // Get gpt response everytime a new query is transcripted
    useEffect(() => {
        if (!transcription) return;
        messages.current.push({ role: "user", content: transcription });
        fetchGptResponse(messages.current.messages);
    }, [transcription]);

    // Speak gpt response everytime a new gpt response is generated
    useEffect(() => {
        if (!gptResponse) return;
        messages.current.push({ role: "assistant", content: gptResponse });
        speak(gptResponse);
    }, [gptResponse]);

    return {
        record,
        stopRecording,
        isRecording,
        transcription,
        isLoadingTranscription,
        errorTranscription,
        response: gptResponse,
        isLoadingResponse: isLoadingGptResponse,
        errorResponse: errorGptResponse,
        isSpeaking,
        hasDeclinedRecordingPermission: hasDeclined,
    };
};
