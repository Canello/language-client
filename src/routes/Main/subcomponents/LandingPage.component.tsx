import { useNavigate } from "react-router-dom";
import {
    FeaturesSection,
    HeroSection,
    Wrapper,
    MainStyled,
    Subtitle,
    Title,
    FeatureCardsContainer,
    IsItForYouSection,
    SectionTitle,
    IsItForYouDescription,
    FirstWord,
    Arrow,
    SeeMore,
    SeeMoreText,
    CallToAction,
} from "./LandingPage.styles";
import { Button } from "../../../components/Button/Button.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { ROUTES } from "../../../utils/constants";
import { FeatureCard } from "./FeatureCard.component";
import TelescopeIcon from "../../../assets/telescope.svg";
import ClassIcon from "../../../assets/class.svg";
import ClockIcon from "../../../assets/clock.svg";
import DisabledEyeIcon from "../../../assets/disabled-eye.svg";
import HeroArrow from "../../../assets/landing-page-arrow.svg";
import { track } from "../../../utils/functions/track";
import React from "react";

const FEATURES = [
    {
        title: "Sem passar vergonha",
        description:
            "Sem se preocupar com julgamentos. Sem ninguém para te observar.",
        icon: DisabledEyeIcon,
    },
    {
        title: "Correções e sugestões",
        description:
            "Nossa inteligência artificial identifica erros gramaticais e oferece sugestões para você falar mais naturalmente.",
        icon: ClassIcon,
    },
    {
        title: "Qualquer situação ou assunto",
        description:
            "Você pode simular uma entrevista de emprego, um almoço ou mesmo aprender sobre os dinossauros!",
        icon: TelescopeIcon,
    },
    {
        title: "Quando e onde quiser",
        description:
            "Não importa se você está em casa, no trabalho ou em uma pausa no seu dia. Converse a qualquer momento.",
        icon: ClockIcon,
    },
];

const featureCards = FEATURES.map((feature) => (
    <FeatureCard key={feature.title} feature={feature} />
));

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const goToSignUp = () => {
        track("trackCustom", "LandingPageTestButton");
        navigate(ROUTES.signUp);
    };

    return (
        <MainStyled data-testid="MainStyled">
            <HeroSection>
                <Wrapper>
                    <Title>Pratique inglês conversando com a Caitlyn</Title>
                    <Spacer y={8} />
                    <Subtitle>
                        {`Converse por áudio com a inteligência artificial como se estivesse falando com um professor de verdade.
                    Sem passar vergonha. Quando e onde você quiser.`}
                    </Subtitle>
                    <Spacer y={32} />
                    <Button variant="primary" size="large" onClick={goToSignUp}>
                        Teste grátis (sem colocar cartão)
                    </Button>
                    <SeeMore>
                        <SeeMoreText>Saiba mais</SeeMoreText>
                        <Spacer y={8} />
                        <Arrow src={HeroArrow} />
                    </SeeMore>
                </Wrapper>
            </HeroSection>
            <Spacer y={80} />
            <FeaturesSection>
                <SectionTitle>Por que a Caitlyn?</SectionTitle>
                <Spacer y={24} />
                <FeatureCardsContainer>{featureCards}</FeatureCardsContainer>
            </FeaturesSection>
            <Spacer y={120} />
            <IsItForYouSection>
                <SectionTitle>
                    Será que a Caitlyn é a escolha certa para você?
                </SectionTitle>
                <Spacer y={32} />
                <IsItForYouDescription>
                    <FirstWord>- Você</FirstWord> consegue ler textos, mas se
                    sente inseguro para conversar.
                    <br />
                    <br />
                    <FirstWord>- Você</FirstWord> até fala inglês, mas às vezes
                    erra a estrutura da frase ou comete erros de vocabulário.
                    <br />
                    <br />
                    <FirstWord>- Você</FirstWord> quer uma opção mais acessível
                    que professores americanos, mas que dê resultados reais.
                </IsItForYouDescription>
                <Spacer y={32} />
                <CallToAction
                    variant="primary"
                    size="large"
                    onClick={goToSignUp}
                >
                    Teste grátis (sem colocar cartão)
                </CallToAction>
            </IsItForYouSection>
            <Spacer y={64} />
        </MainStyled>
    );
};
