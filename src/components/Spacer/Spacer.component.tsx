import React from "react";

interface ISpacerProps {
    x?: number;
    y?: number;
}

export const Spacer: React.FC<ISpacerProps> = ({ x = 0, y = 0 }) => {
    return <div style={{ marginLeft: x, marginTop: y }} />;
};
