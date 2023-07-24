import { LoadingStyled } from "./Loading.styles";

export const Loading = ({ size = 24, thickness = 4, ...props }) => {
    return (
        <LoadingStyled
            size={size}
            thickness={thickness}
            data-testid="LoadingStyled"
            {...props}
        />
    );
};
