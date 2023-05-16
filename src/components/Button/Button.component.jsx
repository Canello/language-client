import { PrimaryButton, SecondaryButton } from "./Button.styles";

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
        default:
            return (
                <PrimaryButton size={size} {...otherProps}>
                    {children}
                </PrimaryButton>
            );
    }
};
