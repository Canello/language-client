import { createPortal } from "react-dom";
import { Background, CloseIcon, Content, ModalStyled } from "./Modal.styles";
import Close from "../../assets/close.svg";

export const Modal = ({ isShowing, onClose, children, ...otherProps }) => {
    return createPortal(
        <ModalStyled isShowing={isShowing} data-testid="ModalStyled">
            <Content {...otherProps}>
                {children}
                <CloseIcon src={Close} onClick={onClose} />
            </Content>
            <Background onClick={onClose} data-testid="ModalBackground" />
        </ModalStyled>,
        document.getElementById("modal-root")
    );
};
