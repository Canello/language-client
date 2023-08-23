import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { ResetPassword } from "./ResetPassword.component";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi.hook";
import { ROUTES } from "../../utils/constants";

jest.mock("react-router-dom", () => {
    return {
        useLocation: () => {
            return {
                pathname: "https://something.com/reset-password/some-token",
            };
        },
        useNavigate: jest.fn(() => {}),
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
            const [data, error] = fetchFn();
            if (data && options.onSuccess) options.onSuccess(data);
            if (error && options.onError) options.onError(error);
        };
        return [fn, data, isLoading];
    };
};

describe("ResetPassword", () => {
    beforeEach(() => {
        (useApi as jest.Mock).mockImplementation(makeUseApi({}));
    });

    it("should render without errors", async () => {
        render(<ResetPassword />);

        const resetPasswordElement = screen.getByTestId("ResetPasswordStyled");
        expect(resetPasswordElement).toBeInTheDocument();
    });

    it("should display loader while fetching", async () => {
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ isLoading: true })
        );
        render(<ResetPassword />);

        const loaderElement = screen.getByTestId("LoadingStyled");
        expect(loaderElement).toBeInTheDocument();
    });

    it("should display error message if invalid_input error is received", async () => {
        const err = {
            type: "invalid_input",
            message: "Some message.",
        };
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [null, err] })
        );
        render(<ResetPassword />);

        const newPasswordInputElement = screen.getByLabelText("Nova senha");
        user.click(newPasswordInputElement);
        await act(async () => {
            user.keyboard("some-password");
        });
        const resetButtonElement = screen.getByRole("button");
        await act(async () => {
            user.click(resetButtonElement);
        });

        const errorMessageElement = await screen.findByText("Some message.");
        expect(errorMessageElement).toBeInTheDocument();
    });

    it("should display error message if expired error is received", async () => {
        const err = {
            type: "expired",
            message: "Some message.",
        };
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [null, err] })
        );
        render(<ResetPassword />);

        const newPasswordInputElement = screen.getByLabelText("Nova senha");
        user.click(newPasswordInputElement);
        await act(async () => {
            user.keyboard("some-password");
        });
        const resetButtonElement = screen.getByRole("button");
        await act(async () => {
            user.click(resetButtonElement);
        });

        const errorMessageElement = await screen.findByText("Some message.");
        expect(errorMessageElement).toBeInTheDocument();
    });

    it("shouldn't display error message if unknown type of error is received", async () => {
        const err = {
            type: "some-unknown-type-of-error",
            message: "Some message.",
        };
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [null, err] })
        );
        render(<ResetPassword />);

        const newPasswordInputElement = screen.getByLabelText("Nova senha");
        user.click(newPasswordInputElement);
        await act(async () => {
            user.keyboard("some-password");
        });
        const resetButtonElement = screen.getByRole("button");
        await act(async () => {
            user.click(resetButtonElement);
        });

        await expect(async () => {
            await screen.findByText("Some message.");
        }).rejects.toThrow();
    });

    it("should go to sign in page if password is successfully reseted", async () => {
        (useApi as jest.Mock).mockImplementation(
            makeUseApi({ fetchFn: () => [{}, null] })
        );
        const spyNavigate = jest.fn(() => {});
        (useNavigate as jest.Mock).mockImplementation(() => spyNavigate);
        render(<ResetPassword />);

        const newPasswordInputElement = screen.getByLabelText("Nova senha");
        user.click(newPasswordInputElement);
        await act(async () => {
            user.keyboard("some-password");
        });
        const resetButtonElement = screen.getByRole("button");
        await act(async () => {
            user.click(resetButtonElement);
        });

        expect(spyNavigate).toHaveBeenCalledTimes(1);
        expect(spyNavigate).toHaveBeenCalledWith(ROUTES.signIn);
    });
});
