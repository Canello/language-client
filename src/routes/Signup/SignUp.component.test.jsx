import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { SignUp } from "./SignUp.component";
import { UserContext } from "../../contexts/user.context";
import { useApi } from "../../hooks/useApi.hook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
        useNavigate: jest.fn(() => () => {}),
    };
});
jest.mock("../../hooks/useApi.hook");
const makeUseApi = ({ fetchFn = () => {}, data = {}, isLoading = false }) => {
    return (service, options = {}) => {
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

describe("SignUp", () => {
    const renderSignUp = () =>
        render(
            <UserContext.Provider value={{ user: null, setUser: () => {} }}>
                <SignUp />
            </UserContext.Provider>
        );

    const fillFormAndSubmit = async () => {
        const nameInputElement = screen.getByLabelText("Nome");
        user.click(nameInputElement);
        user.keyboard("Some Name");
        const emailInputElement = screen.getByLabelText("Email");
        user.click(emailInputElement);
        user.keyboard("email@test.com");
        const passwordInputElement = screen.getByLabelText("Senha");
        user.click(passwordInputElement);
        user.keyboard("some-password");
        const signUpButton = screen.getByRole("button", {
            name: /Criar conta/i,
        });
        user.click(signUpButton);
    };

    beforeEach(() => {
        useApi.mockImplementation(makeUseApi({}));
    });

    it("should render without errors", async () => {
        renderSignUp();

        const signUpElement = screen.getByTestId("SignUpStyled");
        expect(signUpElement).toBeInTheDocument();
    });

    it("should display error message if error of type invalid_input is received", async () => {
        const err = { type: "invalid_input", message: "Some message." };
        useApi.mockImplementation(makeUseApi({ fetchFn: () => [null, err] }));
        renderSignUp();

        await act(async () => {
            await fillFormAndSubmit();
        });

        const warningElement = await screen.findByText(err.message);
        expect(warningElement).toBeInTheDocument();
    });

    it("shouldn't display error message if an error with type other than invalid_input is received", async () => {
        const err = { type: "some_error_type", message: "Some message." };
        useApi.mockImplementation(makeUseApi({ fetchFn: () => [null, err] }));
        renderSignUp();

        await act(async () => {
            await fillFormAndSubmit();
        });

        await expect(async () => {
            await screen.findByText(err.message);
        }).rejects.toThrow();
    });

    it("should go to sign in route if user clicks to do so", async () => {
        const spyNavigate = jest.fn(() => {});
        useNavigate.mockImplementation(() => spyNavigate);
        renderSignUp();

        const signInLinkElement = screen.getByText(/Entre/i);
        user.click(signInLinkElement);

        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.signIn);
    });

    it("should go to the main route if user is successfully registered", async () => {
        const spyNavigate = jest.fn(() => {});
        useNavigate.mockImplementation(() => spyNavigate);
        useApi.mockImplementation(makeUseApi({ fetchFn: () => [{}, null] }));
        renderSignUp();

        await act(async () => {
            await fillFormAndSubmit();
        });

        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.main);
    });

    it("should display loader while data is being loaded", async () => {
        useApi.mockImplementation(makeUseApi({ isLoading: true }));
        renderSignUp();

        const loaderElement = screen.getByTestId("LoadingStyled");
        expect(loaderElement).toBeInTheDocument();
    });

    it("shouldn't display loader when data is not being loaded", async () => {
        useApi.mockImplementation(makeUseApi({ isLoading: false }));
        renderSignUp();

        const loaderElement = screen.queryByTestId("LoadingStyled");
        expect(loaderElement).toBeNull();
    });
});
