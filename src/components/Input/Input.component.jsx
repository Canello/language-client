import { Spacer } from "../Spacer/Spacer.component";
import { InputContainer, InputStyled, Label } from "./Input.styles";

export const Input = ({ label, containerStyle, value, ...props }) => {
    const isShifted = value.length > 0;

    return (
        <InputContainer style={containerStyle}>
            <Spacer y={16} />
            <InputStyled id={label} {...props} />
            <Label htmlFor={label} isShifted={isShifted}>
                {label}
            </Label>
        </InputContainer>
    );
};
