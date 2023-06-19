import { Spacer } from "../../../components/Spacer/Spacer.component";
import {
    Description,
    FeatureCardStyled,
    Icon,
    Title,
} from "./FeatureCard.styles";

export const FeatureCard = ({ feature }) => {
    return (
        <FeatureCardStyled>
            <Spacer y={24} />
            <Icon src={feature.icon} />
            <Spacer y={24} />
            <Title>{feature.title}</Title>
            <Spacer y={8} />
            <Description>{feature.description}</Description>
        </FeatureCardStyled>
    );
};
