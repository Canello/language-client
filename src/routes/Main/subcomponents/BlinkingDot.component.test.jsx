import { screen, render } from "@testing-library/react";
import { BlinkingDot } from "./BlinkingDot.component";

describe("BlinkingDot", () => {
    it("should render without errors", async () => {
        render(<BlinkingDot />);

        const blinkingDotElement = screen.getByTestId("BlinkingDotStyled");
        expect(blinkingDotElement).toBeInTheDocument();
    });
});
