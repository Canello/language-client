import React, { MouseEventHandler, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { Background, CloseIcon, Content, ModalStyled } from "./Modal.styles";
import Close from "../../assets/close.svg";

interface IModalProps {
    isShowing: boolean;
    onClose: MouseEventHandler;
}

export const Modal: React.FC<PropsWithChildren<IModalProps>> = ({
    isShowing,
    onClose,
    children,
    ...otherProps
}) => {
    return createPortal(
        <ModalStyled isShowing={isShowing} data-testid="ModalStyled">
            <Content {...otherProps}>
                {children}
                <CloseIcon src={Close} onClick={onClose} />
            </Content>
            <Background onClick={onClose} data-testid="ModalBackground" />
        </ModalStyled>,
        document.getElementById("modal-root")!
    );
};
