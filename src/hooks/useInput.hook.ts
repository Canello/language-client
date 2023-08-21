import { ChangeEventHandler, useState } from "react";

type UseInput = () => [string, ChangeEventHandler<HTMLInputElement>];

export const useInput: UseInput = () => {
    const [value, setValue] = useState<string>("");

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setValue(value);
    };

    return [value, onChange];
};
