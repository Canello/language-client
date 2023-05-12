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
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const AudioTip = styled(Tip)`
    position: absolute;
    right: 72px;
    max-width: 160px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: var(--secondary-color-1);
`;
