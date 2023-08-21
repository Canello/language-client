import styled from "styled-components";

interface ILoadingStyled {
    size: number;
    thickness: number;
}
export const LoadingStyled = styled.div<ILoadingStyled>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 100%;
    border: ${({ thickness }) => thickness}px solid var(--secondary-color-4);
    border-bottom-color: var(--secondary-color-6);
    animation: loading-spinner 1.25s linear infinite;

    @keyframes loading-spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
