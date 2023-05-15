import { Spacer } from "../../../components/Spacer/Spacer.component";
import { useConversation } from "../../../hooks/useConversation.hook";
import {
    AppPageStyled,
    AudioButtonContainer,
    AudioTip,
    PageWrapper,
} from "./AppPage.styles";
import { AudioButton } from "./AudioButton.component";
import { ChatBox } from "./ChatBox.component";

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

    return (
        <AppPageStyled>
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
                <ChatBox label="Você" isLoading={isLoadingQuery} />
                <Spacer y={24} />
                <ChatBox
                    label="Caitlyn"
                    isLoading={isLoadingResponse}
                    isActive={isSpeaking}
                />
            </PageWrapper>
        </AppPageStyled>
    );
};
