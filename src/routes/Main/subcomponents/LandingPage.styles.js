import styled from "styled-components";
import { Button } from "../../../components/Button/Button.component";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
`;

export const HeroSection = styled.section`
    position: relative;
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
    margin-top: 140px;
    font-size: 32px;
    font-weight: bold;
    color: var(--grey-color-white);

    @media screen and (max-width: 500px) {
        margin-top: 32px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: normal;
    color: var(--neutral-color-4);
`;

export const SeeMore = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    right: calc(50% - 60px);
    bottom: 32px;
    border-radius: 32px;
    background-color: #1f324630;
    backdrop-filter: blur(5px);
`;

export const SeeMoreText = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: var(--grey-color-white);
`;

export const Arrow = styled.img``;

export const FeaturesSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    padding: 0 32px;
`;

export const FeatureCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;

    @media screen and (max-width: 700px) {
        justify-content: center;
    }
`;

export const IsItForYouSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

export const CallToAction = styled(Button)`
    width: auto;
`;
