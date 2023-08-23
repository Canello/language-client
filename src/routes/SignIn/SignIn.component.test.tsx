import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { SignIn } from "./SignIn.component";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { useApi } from "../../hooks/useApi.hook";
import { ROUTES } from "../../utils/constants";

jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
        useNavigate: jest.fn(() => () => {}),
    };
});
jest.mock("../../hooks/useApi.hook");
const makeUseApi = ({
    fetchFn = () => {},
    data = {},
    isLoading = false,
}: any) => {
    return (service: any, options: any = {}) => {
        const fn = () => {
            const [responseData, responseError] = fetchFn();
            if (responseData && options.onSuccess)
                options.onSuccess(responseData);
            if (responseError && options.onError)
                options.onError(responseError);
        };
        return [fn, data, isLoading];
    };
};

describe("SignIn", () => {
    const renderSignIn = () =>
        render(
            <UserContext.Provider
                value={{ user: null, setUser: () => {} } as any}
            >
                <SignIn />
            </UserContext.Provider>
        );

    const fillFormAndSubmit = async () => {
        const emailInputElement = screen.getByLabelText("Email");
        user.click(emailInputElement);
        user.keyboard("email@test.com");
        const passwordInputElement = screen.getByLabelText("Senha");
        user.click(passwordInputElement);
        user.keyboard("some-password");
        const signInButton = screen.getByRole("button", {
            name: /Entrar/i,
        });
        user.click(signInButton);
    };

    beforeEach(() => {
        (useApi as jest.Mock).mockImplementation(makeUseApi({}));
    });

    it("should render without errors", async () => {
        renderSignIn();

        const signInElement = screen.getByTestId("SignInStyled");
        expect(signInElement).toBeInTheDocument();
    });

    it("should display error message if error of type invalid_input is received", async () => {
        const err = { type: "invalid_input", message: "Some message." };
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [null, err] })
        );
        renderSignIn();

        await act(async () => {
            await fillFormAndSubmit();
        });

        const warningElement = await screen.findByText(err.message);
        expect(warningElement).toBeInTheDocument();
    });

    it("shouldn't display error message if an error with type other than invalid_input is received", async () => {
        const err = { type: "some_error_type", message: "Some message." };
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [null, err] })
        );
        renderSignIn();

        await act(async () => {
            await fillFormAndSubmit();
        });

        await expect(async () => {
            await screen.findByText(err.message);
        }).rejects.toThrow();
    });

    it("should go to password forgotten route if user says she has forgotten its password", async () => {
        const spyNavigate = jest.fn(() => {});
        (useNavigate as jest.Mock).mockImplementation(() => spyNavigate);
        renderSignIn();

        const forgotPasswordLinkElement =
            screen.getByText(/Esqueceu a senha\?/i);
        user.click(forgotPasswordLinkElement);

        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.passwordForgotten);
    });

    it("should go to sign up route if user clicks to do so", async () => {
        const spyNavigate = jest.fn(() => {});
        (useNavigate as jest.Mock).mockImplementation(() => spyNavigate);
        renderSignIn();

        const signUpLinkElement = screen.getByText(/Cadastre-se/i);
        user.click(signUpLinkElement);

        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.signUp);
    });

    it("should go to the main route if user successfully logs in", async () => {
        const spyNavigate = jest.fn(() => {});
        (useNavigate as jest.Mock).mockImplementation(() => spyNavigate);
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [{}, null] })
        );
        renderSignIn();

        await act(async () => {
            await fillFormAndSubmit();
        });

        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.main);
    });

    it("should display loader while data is being loaded", async () => {
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ isLoading: true })
        );
        renderSignIn();

        const loaderElement = screen.getByTestId("LoadingStyled");
        expect(loaderElement).toBeInTheDocument();
    });

    it("shouldn't display loader when data is not being loaded", async () => {
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ isLoading: false })
        );
        renderSignIn();

        const loaderElement = screen.queryByTestId("LoadingStyled");
        expect(loaderElement).toBeNull();
    });
});
