import { PrimaryButton } from "./Button.styles";

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
        default:
            return (
                <PrimaryButton size={size} {...otherProps}>
                    {children}
                </PrimaryButton>
            );
    }
};
