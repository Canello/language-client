import styled from "styled-components";
import { Tip } from "../../../components/Tip/Tip.component";

export const AppPageStyled = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 32px;
    padding-top: 52px;
`;

export const PageWrapper = styled.div`
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
