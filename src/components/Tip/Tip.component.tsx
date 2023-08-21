import React, { PropsWithChildren } from "react";
import { TipStyled } from "./Tip.styles";

interface ITipProps {
    isShowing: boolean;
}

export const Tip: React.FC<PropsWithChildren<ITipProps>> = ({
    isShowing = true,
    children,
    ...props
}) => {
    if (!isShowing) return null;
    return <TipStyled {...props}>{children}</TipStyled>;
};
