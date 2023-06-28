import styled from "styled-components";
import { Button } from "../../../components/Button/Button.component";

export const FreeTestIsOverModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary-color-1);
    text-align: center;
`;

export const BuyButton = styled(Button)`
    width: 100%;
`;

export const RenewalText = styled.h2`
    max-width: 246px;
    font-size: 13px;
    font-weight: normal;
    color: var(--secondary-color-1);
`;
