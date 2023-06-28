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
                <Spacer y={32} />
                <BuyButton variant="primary" onClick={openPayment}>
                    Comprar acesso por R$19,99
                </BuyButton>
                <Spacer y={16} />
                <RenewalText>
                    - <b>Não renova</b> automaticamente.
                    <br />- Inclui aproximadamente 1000 mensagens durante 1 mês.
                </RenewalText>
            </FreeTestIsOverModalStyled>
        </Modal>
    );
};
