import styled from "styled-components";

export const ProfileStyled = styled.main``;

export const Text = styled.p`
    font-size: 16px;
    font-weight: normal;
    color: var(--neutral-color-1);
`;

export const RenewalText = styled.h2`
    max-width: 246px;
    font-size: 13px;
    font-weight: normal;
    color: var(--secondary-color-1);
`;

export const Logout = styled.a`
    font-size: 16px;
    font-weight: 700;
    color: var(--secondary-color-1);

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
