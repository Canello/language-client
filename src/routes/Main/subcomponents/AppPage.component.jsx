import { useState } from "react";
import {
    AppPageStyled,
    AudioButtonContainer,
    AudioTip,
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
        startRecording,
        stopRecording,
        isRecording,
        query,
        isLoadingQuery,
        response,
        isLoadingResponse,
        isSpeaking,
        isRecordingAllowed,
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
                        startRecording={startRecording}
                        stopRecording={stopRecording}
                    />
                </AudioButtonContainer>
                <RecordingPermissionTip isShowing={!isRecordingAllowed}>
                    Autorize o uso do microfone no seu navegador para falar com
                    a Caitlyn
                </RecordingPermissionTip>
                <Spacer y={16} />
                <ChatBox label="Você" isLoading={isLoadingQuery}>
                    {query}
                </ChatBox>
                <Spacer y={24} />
                <ChatBox
                    label="Caitlyn"
                    isLoading={isLoadingResponse}
                    isActive={isSpeaking}
                >
                    {response}
                </ChatBox>
            </PageWrapper>
            <FreeTestIsOverModal
                isShowing={isShowingModal}
                onClose={closeModal}
                openPayment={openPayment}
            />
        </AppPageStyled>
    );
};
