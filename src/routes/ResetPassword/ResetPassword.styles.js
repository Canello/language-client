import styled from "styled-components";
import { Button } from "../../components/Button/Button.component";

export const ResetPasswordStyled = styled.div`
    display: flex;
    justify-content: center;
`;

export const ResetPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

export const Text = styled.h2`
    font-size: 16px;
    font-weight: normal;
    color: var(--neutral-color-1);
`;

export const ResetPasswordButton = styled(Button)`
    width: 100%;
`;
