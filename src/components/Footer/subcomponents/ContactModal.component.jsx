import { ContactModalStyled, Email, Text } from "./ContactModal.styles";
import { Modal } from "../../Modal/Modal.component";
import { Spacer } from "../../Spacer/Spacer.component";

export const ContactModal = ({ ...otherProps }) => {
    return (
        <Modal {...otherProps}>
            <ContactModalStyled>
                <Text>Entre em contato com o suporte pelo email:</Text>
                <Spacer y={8} />
                <Email>caitlyn.english.bot@gmail.com</Email>
            </ContactModalStyled>
        </Modal>
    );
};
