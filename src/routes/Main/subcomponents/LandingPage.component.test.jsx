import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { LandingPage } from "./LandingPage.component";
import { BrowserRouter } from "react-router-dom";
import { track } from "../../../utils/functions/track";
import { ROUTES } from "../../../utils/constants";

const mockNavigate = jest.fn(() => {});
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("LandingPage", () => {
    it("should render without errors", async () => {
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );

        const mainElement = screen.getByTestId("MainStyled");
        expect(mainElement).toBeInTheDocument();
    });

    it("should track and navigate when any free test button is clicked", async () => {
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );

        const freeTestButtonElements = screen.getAllByRole("button", {
            name: /Teste grátis \(sem colocar cartão\)/i,
        });
        expect(freeTestButtonElements).toHaveLength(2);

        for (let buttonElement of freeTestButtonElements) {
            user.click(buttonElement);

            expect(track).toHaveBeenCalledTimes(1);
            expect(track).toHaveBeenCalledWith(
                "trackCustom",
                "LandingPageTestButton"
            );
            track.mockClear();

            expect(mockNavigate).toHaveBeenCalledTimes(1);
            expect(mockNavigate).toHaveBeenCalledWith(ROUTES.signUp);
            mockNavigate.mockClear();
        }
    });
});
