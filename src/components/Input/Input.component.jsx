import { Spacer } from "../Spacer/Spacer.component";
import { InputContainer, InputStyled, Label } from "./Input.styles";

export const Input = ({ label, containerStyle, value, alert, ...props }) => {
    const isShifted = value.length > 0;

    return (
        <InputContainer style={containerStyle}>
            <Spacer y={16} />
            <InputStyled id={label} alert={alert} {...props} />
            <Label htmlFor={label} isShifted={isShifted}>
                {label}
            </Label>
        </InputContainer>
    );
};
