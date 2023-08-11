import React from "react";
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "./Button.styles";

interface IButtonProps {
    variant?: string;
    size?: string;
}

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
    variant = "primary",
    size = "large",
    children,
    ...otherProps
}) => {
    switch (variant) {
        case "primary":
            return (
                <PrimaryButton size={size} {...otherProps}>
                    {children}
                </PrimaryButton>
            );
        case "secondary":
            return (
                <SecondaryButton size={size} {...otherProps}>
                    {children}
                </SecondaryButton>
            );
        case "tertiary":
            return (
                <TertiaryButton size={size} {...otherProps}>
                    {children}
                </TertiaryButton>
            );
        default:
            return (
                <PrimaryButton size={size} {...otherProps}>
                    {children}
                </PrimaryButton>
            );
    }
};
