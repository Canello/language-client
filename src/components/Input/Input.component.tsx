import React, { InputHTMLAttributes } from "react";
import { Spacer } from "../Spacer/Spacer.component";
import { InputContainer, InputStyled, Label } from "./Input.styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    containerStyle?: string;
    value: string;
    alert?: string;
}

export const Input: React.FC<IInputProps> = ({
    label,
    value,
    alert,
    onChange,
    ...props
}) => {
    const isShifted = value.length > 0;

    return (
        <InputContainer>
            <Spacer y={16} />
            <InputStyled
                id={label}
                alert={alert}
                onChange={onChange}
                {...props}
            />
            <Label htmlFor={label} isShifted={isShifted}>
                {label}
            </Label>
        </InputContainer>
    );
};
