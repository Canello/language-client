import React, { MouseEventHandler } from "react";
import {
    BuyButton,
    FreeTestIsOverModalStyled,
    RenewalText,
    Text,
} from "./FreeTestIsOverModal.styles";
import { Modal } from "../../../components/Modal/Modal.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { usePayment } from "../../../hooks/usePayment.hook";

interface IFreeTestIsOverModelProps {
    isShowing: boolean;
    onClose: MouseEventHandler;
}

export const FreeTestIsOverModal: React.FC<IFreeTestIsOverModelProps> = ({
    isShowing,
    onClose,
    ...otherProps
}) => {
    const openPayment = usePayment();

    return (
        <Modal isShowing={isShowing} onClose={onClose} {...otherProps}>
            <FreeTestIsOverModalStyled data-testid="FreeTestIsOverModalStyled">
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
