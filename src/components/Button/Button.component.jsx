import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "./Button.styles";

export const Button = ({
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
