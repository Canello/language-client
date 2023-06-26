import { useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        const value = event.target.value;
        setValue(value);
    };

    return [value, onChange];
};
