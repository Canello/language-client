import styled from "styled-components";

export const TipStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
    font-size: 13px;
    font-weight: normal;
    color: var(--grey-color-white);
    text-align: center;
    transition: all 200ms linear;
    pointer-events: none;
`;
