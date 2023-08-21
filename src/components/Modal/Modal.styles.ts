import styled from "styled-components";

interface IModalStyled {
    isShowing: boolean | undefined;
}
export const ModalStyled = styled.div<IModalStyled>`
    position: fixed;
    display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
    justify-content: center;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 64px 0;
    overflow-y: scroll;
`;

export const Content = styled.div`
    position: absolute;
    top: 64px;
    margin: 0 32px;
    padding: 32px;
    border-radius: 8px;
    background-color: var(--neutral-color-3);
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.08);
    min-width: 240px;
    z-index: 1000;
`;

interface ICloseIcon {
    onClick: Function;
}
export const CloseIcon = styled.img<ICloseIcon>`
    position: absolute;
    height: 20px;
    padding: 2px;
    top: 10px;
    right: 10px;
    border-radius: 4px;
    background-color: var(--neutral-color-3);

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
`;
