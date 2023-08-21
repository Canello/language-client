import React, { PropsWithChildren, useState } from "react";
import {
    Box,
    ChatBoxStyled,
    H4,
    IconsContainer,
    LabelContainer,
    LabelWrapper,
    Maximize,
    Minimize,
    Text,
} from "./ChatBox.styles";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { Loading } from "../../../components/Loading/Loading.component";
import MinimizeIcon from "../../../assets/minimize.svg";

interface IChatBoxProps {
    label?: string;
    isLoading?: boolean;
    isActive?: boolean;
}

export const ChatBox: React.FC<PropsWithChildren<IChatBoxProps>> = ({
    label,
    isLoading,
    isActive,
    children,
    ...otherProps
}) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const toggleIsMinimized = () => setIsMinimized(!isMinimized);

    return (
        <ChatBoxStyled data-testid="ChatBoxStyled">
            <LabelContainer>
                <LabelWrapper>
                    <H4>{label}</H4>
                    {isLoading ? (
                        <>
                            <Spacer x={4} />
                            <Loading size={16} thickness={3} />
                        </>
                    ) : null}
                </LabelWrapper>
                <IconsContainer>
                    <Minimize
                        onClick={toggleIsMinimized}
                        src={MinimizeIcon}
                        data-testid="Minimize"
                    />
                    <Maximize
                        onClick={toggleIsMinimized}
                        src={MinimizeIcon}
                        isMinimized={isMinimized}
                        data-testid="Maximize"
                    />
                </IconsContainer>
            </LabelContainer>
            <Spacer y={4} />
            <Box
                isMinimized={isMinimized}
                isActive={isActive ?? false}
                {...otherProps}
            >
                {isLoading ? null : (
                    <Text isMinimized={isMinimized}>{children}</Text>
                )}
            </Box>
        </ChatBoxStyled>
    );
};
