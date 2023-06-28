import { useState } from "react";
import {
    AppPageStyled,
    AudioButtonContainer,
    AudioTip,
    Notes,
    PageWrapper,
    RecordingPermissionTip,
} from "./AppPage.styles";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { useConversation } from "../../../hooks/useConversation.hook";
import { AudioButton } from "./AudioButton.component";
import { ChatBox } from "./ChatBox.component";
import { FreeTestIsOverModal } from "./FreeTestIsOverModal.component";
import { usePayment } from "../../../hooks/usePayment.hook";

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
        response,
        isLoadingResponse,
        isSpeaking,
        hasDeclinedRecordingPermission,
    } = useConversation(onCreditsEnd);

    const openPayment = usePayment();

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
                        startRecording={record}
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
                <ChatBox label="Você" isLoading={isLoadingTranscription}>
                    {transcription}
                </ChatBox>
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
                    Para melhor funcionamento, use Chrome, Edge ou Safari.
                </Notes>
            </PageWrapper>
            <FreeTestIsOverModal
                isShowing={isShowingModal}
                onClose={closeModal}
                openPayment={openPayment}
            />
        </AppPageStyled>
    );
};
