import { TipStyled } from "./Tip.styles";

export const Tip = ({ children, isShowing = true, ...props }) => {
    if (!isShowing) return null;
    return (
        <TipStyled isShowing={isShowing} {...props}>
            {children}
        </TipStyled>
    );
};
