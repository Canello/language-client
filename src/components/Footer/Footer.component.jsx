import { useState } from "react";
import {
    ContactLink,
    ContactText,
    Container,
    FooterStyled,
    LogoText,
} from "./Footer.styles";
import { Spacer } from "../Spacer/Spacer.component";
import { ContactModal } from "./subcomponents/ContactModal.component";

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <FooterStyled>
            <Container>
                <ContactText>
                    Dúvidas?{" "}
                    <ContactLink onClick={openModal}>Fale conosco</ContactLink>
                </ContactText>
            </Container>
            <Spacer y={24} />
            <Container>
                <h6>logo</h6>
                <Spacer x={8} />
                <LogoText>Caitlyn @ 2023</LogoText>
            </Container>
            <ContactModal isShowing={isOpen} onClose={closeModal} />
        </FooterStyled>
    );
};
