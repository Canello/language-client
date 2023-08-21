import React, { MouseEventHandler } from "react";
import { ContactModalStyled, Email, Text } from "./ContactModal.styles";
import { Modal } from "../../Modal/Modal.component";
import { Spacer } from "../../Spacer/Spacer.component";

interface IContactModalProps {
    isShowing: boolean;
    onClose: MouseEventHandler;
}

export const ContactModal: React.FC<IContactModalProps> = ({
    isShowing,
    onClose,
    ...otherProps
}) => {
    return (
        <Modal isShowing={isShowing} onClose={onClose} {...otherProps}>
            <ContactModalStyled data-testid="ContactModalStyled">
                <Text>Entre em contato com o suporte pelo email:</Text>
                <Spacer y={8} />
                <Email>caitlyn.english.bot@gmail.com</Email>
            </ContactModalStyled>
        </Modal>
    );
};
