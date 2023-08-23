import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Profile } from "./Profile.component";
import { UserContext } from "../../contexts/user.context";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
        useNavigate: jest.fn(),
    };
});

describe("Profile", () => {
    it("should render without errors", async () => {
        render(
            <BrowserRouter>
                <UserContext.Provider
                    value={{ user: { isActive: false } } as any}
                >
                    <Profile />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const profileElement = screen.getByTestId("ProfileStyled");
        expect(profileElement).toBeInTheDocument();
    });

    it("should render expiration date if user is active, and shouldn't render buy button", async () => {
        render(
            <BrowserRouter>
                <UserContext.Provider
                    value={{ user: { isActive: true } } as any}
                >
                    <Profile />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const expirationDateElement = screen.getByText(
            /Assinatura válida até/i
        );
        expect(expirationDateElement).toBeInTheDocument();
        const buyButtonElement = screen.queryByRole("button", {
            name: /Comprar acesso por R\$19,99/i,
        });
        expect(buyButtonElement).toBeNull();
    });

    it("should render buy button if user is not active, and shouldn't render expiration date", async () => {
        render(
            <BrowserRouter>
                <UserContext.Provider
                    value={{ user: { isActive: false } } as any}
                >
                    <Profile />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const expirationDateElement = screen.queryByText(
            /Assinatura válida até/i
        );
        expect(expirationDateElement).toBeNull();
        const buyButtonElement = screen.getByRole("button", {
            name: /Comprar acesso por R\$19,99/i,
        });
        expect(buyButtonElement).toBeInTheDocument();
    });

    it("should log the user out when logout is clicked", async () => {
        const spyNavigate = jest.fn(() => {});
        const spyLogout = jest.fn(() => {});
        (useNavigate as jest.Mock).mockImplementation(() => spyNavigate);
        render(
            <BrowserRouter>
                <UserContext.Provider
                    value={
                        { user: { isActive: false }, logout: spyLogout } as any
                    }
                >
                    <Profile />
                </UserContext.Provider>
            </BrowserRouter>
        );

        const logoutElement = screen.getByText(/Sair/i);
        user.click(logoutElement);
        expect(spyLogout).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.main);
    });
});
