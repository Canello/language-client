import {
    Description,
    FeatureCardStyled,
    Icon,
    Title,
} from "./FeatureCard.styles";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import React from "react";

interface Feature {
    title: string;
    description: string;
    icon: any;
}

interface IFeatureCardProps {
    feature: Feature;
}

export const FeatureCard: React.FC<IFeatureCardProps> = ({ feature }) => {
    return (
        <FeatureCardStyled data-testid="FeatureCardStyled">
            <Spacer y={24} />
            <Icon src={feature.icon} />
            <Spacer y={24} />
            <Title>{feature.title}</Title>
            <Spacer y={8} />
            <Description>{feature.description}</Description>
        </FeatureCardStyled>
    );
};
