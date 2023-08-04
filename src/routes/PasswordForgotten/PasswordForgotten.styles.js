import styled from "styled-components";
import { Button } from "../../components/Button/Button.component";

export const PasswordForgottenStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Confirmation = styled.h2`
    font-size: 18px;
    font-weight: 700;
    color: var(--neutral-color-1);
`;

export const PasswordForgottenForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

export const LogoContainer = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoStyled = styled.img`
    width: 36px;
`;

export const LogoText = styled.figcaption`
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary-color-2);
    font-family: var(--logo-font);
`;

export const Text = styled.h2`
    font-size: 16px;
    font-weight: normal;
    color: var(--neutral-color-1);
    text-align: center;
`;

export const PasswordForgottenButton = styled(Button)`
    width: 100%;
`;
