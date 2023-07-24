import { render, screen } from "@testing-library/react";
import { Main } from "./Main.component";
import { UserContext } from "../../contexts/user.context";

jest.mock("./subcomponents/AppPage.component", () => {
    return {
        AppPage: () => <div data-testid="AppPageMock" />,
    };
});
jest.mock("./subcomponents/LandingPage.component", () => {
    return {
        LandingPage: () => <div data-testid="LandingPageMock" />,
    };
});

describe("Main", () => {
    it("should render AppPage if user is logged in", () => {
        render(
            <UserContext.Provider value={{ user: {} }}>
                <Main />
            </UserContext.Provider>
        );

        const appPage = screen.getByTestId("AppPageMock");

        expect(appPage).toBeInTheDocument();
    });

    it("should render LandingPage if user is not logged in", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <Main />
            </UserContext.Provider>
        );

        const landingPage = screen.getByTestId("LandingPageMock");

        expect(landingPage).toBeInTheDocument();
    });
});
