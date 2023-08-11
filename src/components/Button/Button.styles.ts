import styled from "styled-components";

const HEIGHT = {
    small: 32,
    medium: 36,
    large: 40,
};

export const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => HEIGHT[size]}px;
    padding: 0 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    transition: opacity 100ms linear;

    &:hover {
        opacity: 0.8;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: var(--secondary-color-2);
    color: var(--grey-color-white);
`;

export const SecondaryButton = styled(BaseButton)`
    border: 1px solid var(--secondary-color-2);
    color: var(--secondary-color-1);
`;

export const TertiaryButton = styled(BaseButton)`
    background-color: var(--primary-color-1);
    color: var(--secondary-color-1);
`;
