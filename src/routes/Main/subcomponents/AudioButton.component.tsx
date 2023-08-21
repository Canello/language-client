import React, { MouseEventHandler } from "react";
import { AudioButtonStyled, Mic } from "./AudioButton.styles";
import { BlinkingDot } from "./BlinkingDot.component";
import MicIcon from "../../../assets/mic.svg";

interface IAudioButtonProps {
    isRecording: boolean;
    startRecording: MouseEventHandler<HTMLButtonElement>;
    stopRecording: MouseEventHandler<HTMLButtonElement>;
}

export const AudioButton: React.FC<IAudioButtonProps> = ({
    isRecording,
    startRecording,
    stopRecording,
}) => {
    const onClick = isRecording ? stopRecording : startRecording;

    return (
        <AudioButtonStyled onClick={onClick} data-testid="FeatureCardStyled">
            <Mic src={MicIcon} />
            {isRecording ? <BlinkingDot /> : null}
        </AudioButtonStyled>
    );
};
