import { useState } from "react";
import {
    AppPageStyled,
    AudioButtonContainer,
    AudioTip,
    PageWrapper,
} from "./AppPage.styles";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { useConversation } from "../../../hooks/useConversation.hook";
import { AudioButton } from "./AudioButton.component";
import { ChatBox } from "./ChatBox.component";
import { FreeTestIsOverModal } from "./FreeTestIsOverModal.component";

export const AppPage = () => {
    const {
        startRecording,
        stopRecording,
        isRecording,
        query,
        isLoadingQuery,
        response,
        isLoadingResponse,
        isSpeaking,
    } = useConversation();

    const [isShowingModal, setIsShowingModal] = useState(true);
    const showModal = () => setIsShowingModal(true);
    const closeModal = () => setIsShowingModal(false);

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
            />
        </AppPageStyled>
    );
};
