import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar.component";
import { UserContext } from "../../contexts/user.context";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-dom", () => {
    return {
        ...jest.requireActual("react-dom"),
        createPortal: (el) => el,
    };
});

describe("Navbar", () => {
    it("should render without errors", async () => {
        render(
            <BrowserRouter>
                <UserContext.Provider value={{ user: {} }}>
                    <Navbar />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const navbarElement = screen.getByTestId("NavbarStyled");
        expect(navbarElement).toBeInTheDocument();
    });

    it("should display sign in button when the user is not logged in, and shouldn't display profile link", async () => {
        render(
            <BrowserRouter>
                <UserContext.Provider value={{ user: null }}>
                    <Navbar />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const signInButtonElement = screen.getByRole("button", {
            name: /Entrar/i,
        });
        expect(signInButtonElement).toBeInTheDocument();
        const profileLinkElement = screen.queryByText(/Minha conta/i);
        expect(profileLinkElement).toBeNull();
    });

    it("should display profile link when the user is logged in, and shouldn't display sign in button", async () => {
        render(
            <BrowserRouter>
                <UserContext.Provider value={{ user: {} }}>
                    <Navbar />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const signInButtonElement = screen.queryByRole("button", {
            name: /Entrar/i,
        });
        expect(signInButtonElement).toBeNull();
        const profileLinkElement = screen.getByText(/Minha conta/i);
        expect(profileLinkElement).toBeInTheDocument();
    });
});
