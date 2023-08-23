import { screen, render } from "@testing-library/react";
import { FeatureCard } from "./FeatureCard.component";

jest.mock("../../../components/Spacer/Spacer.component", () => {
    return {
        Spacer: () => <div data-testid="SpacerMock" />,
    };
});

describe("FeatureCard", () => {
    const feature = {
        icon: "Feature icon",
        title: "Feature title",
        description: "Feature description",
    };

    it("should render without errors", async () => {
        render(<FeatureCard feature={feature} />);

        const featureCardElement = screen.getByTestId("FeatureCardStyled");
        expect(featureCardElement).toBeInTheDocument();
    });

    it("displays feature data correctly", async () => {
        render(<FeatureCard feature={feature} />);

        const iconElement = screen.getByRole("img");
        const titleElement = screen.getByText(feature.title);
        const descriptionElement = screen.getByText(feature.description);
        expect(iconElement).toHaveAttribute("src", feature.icon);
        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });
});
