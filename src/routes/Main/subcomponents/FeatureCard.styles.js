import styled from "styled-components";

export const FeatureCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    min-height: 200px;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--neutral-color-4);
`;

export const Icon = styled.img``;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    color: var(--secondary-color-2);
`;

export const Description = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary-color-2);
`;
