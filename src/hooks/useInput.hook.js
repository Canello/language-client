import { useState } from "react";

export const useInput = (checkAlert) => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        const value = event.target.value;
        setValue(value);
        if (checkAlert) checkAlert(value);
    };

    return [value, onChange];
};
