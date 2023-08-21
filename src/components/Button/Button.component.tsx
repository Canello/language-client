import React, { MouseEventHandler } from "react";
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "./Button.styles";

interface IButtonProps {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    onClick: MouseEventHandler;
}

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
    variant = "primary",
    size = "large",
    onClick,
    children,
    ...otherProps
}) => {
    switch (variant) {
        case "primary":
            return (
                <PrimaryButton size={size} onClick={onClick} {...otherProps}>
                    {children}
                </PrimaryButton>
            );
        case "secondary":
            return (
                <SecondaryButton size={size} onClick={onClick} {...otherProps}>
                    {children}
                </SecondaryButton>
            );
        case "tertiary":
            return (
                <TertiaryButton size={size} onClick={onClick} {...otherProps}>
                    {children}
                </TertiaryButton>
            );
        default:
            return (
                <PrimaryButton size={size} onClick={onClick} {...otherProps}>
                    {children}
                </PrimaryButton>
            );
    }
};
