import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    margin-top: 64px;
    background-color: var(--neutral-color-4);
`;

export const Container = styled.div`
    display: flex;
`;

export const ContactText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary-color-2);
`;

export const ContactLink = styled.span`
    font-weight: 700;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
        text-decoration: none;
    }
`;

export const LogoText = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-color-2);
`;
