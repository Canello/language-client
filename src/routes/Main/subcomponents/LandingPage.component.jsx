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
} from "./LandingPage.styles";
import { Button } from "../../../components/Button/Button.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { ROUTES } from "../../../utils/constants";
import { FeatureCard } from "./FeatureCard.component";
import TelescopeIcon from "../../../assets/telescope.svg";
import ClassIcon from "../../../assets/class.svg";
import ClockIcon from "../../../assets/clock.svg";
import DisabledEyeIcon from "../../../assets/disabled-eye.svg";

const FEATURES = [
    {
        title: "Sem passar vergonha",
        description:
            "Sem se preocupar com julgamentos.\nGanhe confiança e melhore suas habilidades em um ambiente seguro e acolhedor.",
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

export const LandingPage = () => {
    const navigate = useNavigate();
    const goToSignUp = () => navigate(ROUTES.signUp);

    return (
        <MainStyled>
            <HeroSection>
                <Wrapper>
                    <Spacer y={32} />
                    <Title>Pratique seu inglês conversando com a Caitlyn</Title>
                    <Spacer y={8} />
                    <Subtitle>
                        {`Converse por áudio com a IA como se estivesse falando com um professor de verdade.
                    Sem passar vergonha. Quando e onde você quiser.`}
                    </Subtitle>
                    <Spacer y={32} />
                    <Button variant="primary" size="large" onClick={goToSignUp}>
                        Teste grátis (sem colocar cartão)
                    </Button>
                </Wrapper>
            </HeroSection>
            <Spacer y={32} />
            <FeaturesSection>
                <Wrapper>
                    <FeatureCardsContainer>
                        {featureCards}
                    </FeatureCardsContainer>
                </Wrapper>
            </FeaturesSection>
            <Spacer y={88} />
            <IsItForYouSection>
                <Wrapper>
                    <SectionTitle>
                        Será que Caitlyn é a escolha certa para você?
                    </SectionTitle>
                    <Spacer y={24} />
                    <IsItForYouDescription>
                        <FirstWord>Você</FirstWord> consegue ler textos, mas se
                        sente inseguro para conversar.
                        <br />
                        <br />
                        <FirstWord>Você</FirstWord> até fala inglês, mas às
                        vezes erra a estrutura da frase ou comete erros de
                        vocabulário.
                        <br />
                        <br />
                        <FirstWord>Você</FirstWord> quer uma opção mais
                        acessível que professores americanos, mas que dê
                        resultados comparáveis.
                    </IsItForYouDescription>
                    <Spacer y={32} />
                    <Button variant="primary" size="large" onClick={goToSignUp}>
                        Teste grátis (sem colocar cartão)
                    </Button>
                </Wrapper>
            </IsItForYouSection>
        </MainStyled>
    );
};
