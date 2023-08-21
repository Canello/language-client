import styled from "styled-components";

const ICON_SIZE = "20px";

export const ChatBoxStyled = styled.div`
    width: 100%;
`;

export const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LabelWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const IconsContainer = styled.div`
    position: relative;
    height: ${ICON_SIZE};
    width: ${ICON_SIZE};
`;

export const Minimize = styled.img`
    position: absolute;
    height: ${ICON_SIZE};
    width: ${ICON_SIZE};
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }
`;

interface IMaximize {
    isMinimized: boolean;
}
export const Maximize = styled(Minimize)<IMaximize>`
    background: none;
    transform: ${({ isMinimized }) =>
        isMinimized ? "rotate(90deg)" : "rotate(0deg)"};
    transition: all 300ms ease-in-out;
`;

export const H4 = styled.h4`
    color: var(--neutral-color-1);
    font-size: 14px;
    font-weight: 400;
`;

interface IBox {
    isMinimized: boolean;
    isActive: boolean;
}
export const Box = styled.div<IBox>`
    display: flex;
    width: 100%;
    min-height: ${({ isMinimized }) => (isMinimized ? "0" : "120px")};
    height: ${({ isMinimized }) => (isMinimized ? "0" : "auto")};
    padding: 16px;
    padding-bottom: ${({ isMinimized }) => (isMinimized ? "0" : "16px")};
    border-radius: 4px;
    background-color: var(--grey-color-1);
    overflow: hidden;
    transition: all 300ms ease-in-out;
    animation: ${({ isActive }) =>
        isActive ? "glowing-chat-box 2s linear infinite" : "none"};
    color: var(--secondary-color-5);

    @keyframes glowing-chat-box {
        0% {
            border: 2px solid #cae2fd;
        }

        50% {
            border: 2px solid #356fb0;
        }

        100% {
            border: 2px solid #cae2fd;
        }
    }
`;

interface IText {
    isMinimized: boolean;
}
export const Text = styled.p<IText>`
    white-space: pre-wrap;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    opacity: ${({ isMinimized }) => (isMinimized ? "0" : "1")};
    transition: all 300ms ease-in-out;
`;
