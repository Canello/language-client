import { render, screen } from "@testing-library/react";
import { AppPage } from "./AppPage.component";
import { useConversation } from "../../../hooks/useConversation.hook";

jest.mock("react-dom", () => {
    return {
        ...jest.requireActual("react-dom"),
        createPortal: (el: any) => el,
    };
});
const makeUseConversation = ({
    record = () => {},
    stopRecording = () => {},
    isRecording = false,
    transcription = "Some transcription.",
    isLoadingTranscription = false,
    corrections = "Some correction.",
    response = "Some ChatGPT response",
    isLoadingResponse = false,
    isSpeaking = false,
    hasDeclinedRecordingPermission = false,
}) => {
    return () => {
        return {
            record,
            stopRecording,
            isRecording,
            transcription,
            isLoadingTranscription,
            corrections,
            response,
            isLoadingResponse,
            isSpeaking,
            hasDeclinedRecordingPermission,
        };
    };
};
jest.mock("../../../hooks/useConversation.hook");

describe("AppPage", () => {
    beforeEach(() => {
        (useConversation as jest.Mock).mockImplementation(
            makeUseConversation({})
        );
    });

    it("should render without errors", async () => {
        render(<AppPage />);

        const appPageElement = screen.getByTestId("AppPageStyled");
        expect(appPageElement).toBeInTheDocument();
    });

    it("should show a tip warning about mic permission if user has declined it", async () => {
        (useConversation as jest.Mock).mockImplementation(
            makeUseConversation({ hasDeclinedRecordingPermission: true })
        );
        render(<AppPage />);

        const recordingPermissionTipElement = screen.getByText(
            /Autorize o uso do microfone no seu navegador e recarregue a página/i
        );
        expect(recordingPermissionTipElement).toBeInTheDocument();
    });

    it("should show a tip prompting the user to finish the audio when they are being recorded", async () => {
        (useConversation as jest.Mock).mockImplementation(
            makeUseConversation({ isRecording: true })
        );
        render(<AppPage />);

        const audioTipElement = screen.getByText(
            /Clique de novo para terminar o áudio/i
        );
        expect(audioTipElement).toBeInTheDocument();
    });
});
