import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/Button/Button.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { HeroSection, MainStyled, Subtitle, Title } from "./LandingPage.styles";

export const LandingPage = () => {
    const navigate = useNavigate();
    const goToSignUp = () => navigate("/sign-up");

    return (
        <MainStyled>
            <HeroSection>
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
            </HeroSection>
        </MainStyled>
    );
};
