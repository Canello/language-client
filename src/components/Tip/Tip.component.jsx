import { TipStyled } from "./Tip.styles";

export const Tip = ({ children, isShowing = true, ...props }) => {
    return (
        <TipStyled isShowing={isShowing} {...props}>
            {children}
        </TipStyled>
    );
};
