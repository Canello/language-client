import styled from "styled-components";

export const MainStyled = styled.div``;

export const HeroSection = styled.section`
    height: 100vh;
    padding: 0 32px;
    padding-top: 52px;
    background-image: url("https://images.unsplash.com/photo-1633113216164-6469037eafa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
    background-size: cover;
    background-position: center;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: var(--grey-color-white);
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: normal;
    color: var(--neutral-color-4);
`;
