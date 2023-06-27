import {
    BuyButton,
    FreeTestIsOverModalStyled,
    RenewalText,
    Text,
} from "./FreeTestIsOverModal.styles";
import { Modal } from "../../../components/Modal/Modal.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";

export const FreeTestIsOverModal = ({ openPayment, ...otherProps }) => {
    return (
        <Modal {...otherProps}>
            <FreeTestIsOverModalStyled>
                <Text>O teste grátis acabou!</Text>
                <Spacer y={16} />
                <BuyButton variant="primary" onClick={openPayment}>
                    Assinar por R$19,99
                </BuyButton>
                <Spacer y={4} />
                <RenewalText>
                    <b>Não renova</b> automaticamente, pode ficar tranquilo.
                </RenewalText>
            </FreeTestIsOverModalStyled>
        </Modal>
    );
};
