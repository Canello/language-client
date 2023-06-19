import styled from "styled-components";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 64px;
`;

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 0 32px;
    padding-top: 52px;
    background-image: url("https://images.unsplash.com/photo-1633113216164-6469037eafa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
    background-size: cover;
    background-position: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
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

export const FeaturesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 0 32px;
`;

export const FeatureCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
`;

export const IsItForYouSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 0 32px;
`;

export const SectionTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    color: var(--secondary-color-2);
`;

export const IsItForYouDescription = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--neutral-color-1);
`;

export const FirstWord = styled.span`
    font-weight: 700;
    color: var(--secondary-color-2);
`;
