import styled from "styled-components";
import { Tip } from "../../../components/Tip/Tip.component";
import { ChatBox } from "./ChatBox.component";

export const AppPageStyled = styled.div`
    display: flex;
    justify-content: center;
`;

export const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
`;

export const AudioButtonContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const AudioTip = styled(Tip)`
    position: absolute;
    left: calc(50% - 160px);
    max-width: 120px;
`;

export const RecordingPermissionTip = styled(Tip)`
    position: absolute;
    top: 16px;
    left: 0;
    max-width: 240px;
`;

export const UserChatBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;

    @media screen and (max-width: 880px) {
        flex-direction: column;
    }
`;

export const CorrectionsChatBox = styled(ChatBox)`
    color: var(--neutral-color-1);
    background-color: var(--neutral-color-5);
`;

export const Notes = styled.span`
    color: var(--neutral-color-1);
    font-size: 13px;
    font-weight: 400;
`;
