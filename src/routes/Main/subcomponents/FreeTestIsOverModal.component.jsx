import {
    BuyButton,
    FreeTestIsOverModalStyled,
    Text,
} from "./FreeTestIsOverModal.styles";
import { Modal } from "../../../components/Modal/Modal.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";

export const FreeTestIsOverModal = ({ ...otherProps }) => {
    return (
        <Modal {...otherProps}>
            <FreeTestIsOverModalStyled>
                <Text>O teste grátis acabou!</Text>
                <Spacer y={32} />
                <BuyButton variant="primary">Assinar por R$19,90</BuyButton>
            </FreeTestIsOverModalStyled>
        </Modal>
    );
};
