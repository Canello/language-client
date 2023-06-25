import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputStyled = styled.input`
    height: 36px;
    width: 100%;
    padding: 0 0 0 16px;
    border-radius: 4px;
    border: 1px solid
        ${({ alert }) => (alert ? "var(--alert-color-1)" : "none")};
    color: ${({ alert }) =>
        alert ? "var(--alert-color-1)" : "var(--grey-color-2)"};
    background-color: var(--neutral-color-4);
`;

export const Label = styled.label`
    position: absolute;
    font-size: ${({ isShifted }) => (isShifted ? "12px" : "14px")};
    font-weight: normal;
    color: var(--neutral-color-1);
    padding-left: ${({ isShifted }) => (isShifted ? "0" : "16px")};
    top: ${({ isShifted }) => (isShifted ? "0" : "24px")};
    transition: all 100ms ease-in-out;
`;
