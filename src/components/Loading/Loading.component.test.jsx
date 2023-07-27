import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading.component";

describe("Loading", () => {
    it("should render without errors", async () => {
        render(<Loading />);

        const loadingElement = screen.getByTestId("LoadingStyled");
        expect(loadingElement).toBeInTheDocument();
    });
});
