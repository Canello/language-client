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
    color: var(--grey-color-white);

    &:hover {
        opacity: 0.8;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: var(--secondary-color-2);
`;