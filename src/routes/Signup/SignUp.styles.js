import styled from "styled-components";

import { Button } from "../../components/Button/Button.component";

export const SignUpStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
    padding-top: 52px;
`;

export const SignUpForm = styled.form`
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
`;

export const SignUpButton = styled(Button)`
    width: 100%;
`;

export const SignUpText = styled.p`
    display: inline;
    font-size: 14px;
    font-weight: normal;
    color: var(--neutral-color-1);
`;

export const SignUpLink = styled.p`
    display: inline;
    font-size: 14px;
    font-weight: bold;
    color: var(--secondary-color-2);

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const AlertText = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: var(--alert-color-1);
`;
