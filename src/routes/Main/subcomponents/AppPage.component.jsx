import { useState } from "react";
import {
    AppPageStyled,
    AudioButtonContainer,
    AudioTip,
    CorrectionsChatBox,
    Notes,
    PageWrapper,
    RecordingPermissionTip,
    UserChatBoxesContainer,
} from "./AppPage.styles";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { useConversation } from "../../../hooks/useConversation.hook";
import { AudioButton } from "./AudioButton.component";
import { ChatBox } from "./ChatBox.component";
import { FreeTestIsOverModal } from "./FreeTestIsOverModal.component";
import { track } from "../../../utils/functions/track";

export const AppPage = () => {
    const [isShowingModal, setIsShowingModal] = useState(false);
    const showModal = () => setIsShowingModal(true);
    const closeModal = () => setIsShowingModal(false);
    const onCreditsEnd = () => showModal();

    const {
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
    } = useConversation(onCreditsEnd);

    const recordAndTrack = () => {
        track("trackCustom", "ClickRecord");
        record();
    };

    return (
        <AppPageStyled className="page">
            <PageWrapper>
                <Spacer y={32} />
                <AudioButtonContainer>
                    <AudioTip isShowing={isRecording}>
                        Clique de novo para terminar o áudio
                    </AudioTip>
                    <AudioButton
                        isRecording={isRecording}
                        startRecording={recordAndTrack}
                        stopRecording={stopRecording}
                    />
                </AudioButtonContainer>
                <RecordingPermissionTip
                    isShowing={hasDeclinedRecordingPermission}
                >
                    Autorize o uso do microfone no seu navegador e recarregue a
                    página
                </RecordingPermissionTip>
                <Spacer y={16} />
                <UserChatBoxesContainer>
                    <ChatBox label="Você" isLoading={isLoadingTranscription}>
                        {transcription}
                    </ChatBox>
                    <CorrectionsChatBox
                        label="Correções"
                        isLoading={isLoadingResponse}
                    >
                        {corrections}
                    </CorrectionsChatBox>
                </UserChatBoxesContainer>
                <Spacer y={24} />
                <ChatBox
                    label="Caitlyn"
                    isLoading={isLoadingResponse}
                    isActive={isSpeaking}
                >
                    {response}
                </ChatBox>
                <Spacer y={16} />
                <Notes>
                    Problemas com a voz? Tente usar a Caitlyn no PC.
                    <br />
                    Para melhor funcionamento, use Chrome, Edge ou Safari.
                </Notes>
            </PageWrapper>
            <FreeTestIsOverModal
                isShowing={isShowingModal}
                onClose={closeModal}
            />
        </AppPageStyled>
    );
};
