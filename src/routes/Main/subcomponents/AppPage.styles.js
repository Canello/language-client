import styled from "styled-components";
import { Tip } from "../../../components/Tip/Tip.component";

export const AppPageStyled = styled.div`
    display: flex;
    justify-content: center;
`;

export const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 720px;
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

export const Notes = styled.span`
    color: #99968f;
    font-size: 13px;
    font-weight: 400;
`;
