import { useState } from "react";
import {
    ContactLink,
    ContactText,
    Container,
    FooterStyled,
    LogoStyled,
    LogoText,
} from "./Footer.styles";
import { Spacer } from "../Spacer/Spacer.component";
import { ContactModal } from "./subcomponents/ContactModal.component";
import Logo from "../../assets/logo-secondary-2.svg";

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <FooterStyled>
            <Container>
                <ContactText>
                    Dúvidas ou sugestões?{" "}
                    <ContactLink onClick={openModal}>Fale conosco</ContactLink>
                </ContactText>
            </Container>
            <Spacer y={24} />
            <Container>
                <LogoStyled src={Logo} />
                <Spacer x={8} />
                <LogoText>Caitlyn - 2023</LogoText>
            </Container>
            <ContactModal isShowing={isOpen} onClose={closeModal} />
        </FooterStyled>
    );
};
