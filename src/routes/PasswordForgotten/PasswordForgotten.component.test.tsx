import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { PasswordForgotten } from "./PasswordForgotten.component";
import { useApi } from "../../hooks/useApi.hook";

jest.mock("../../hooks/useApi.hook");

describe("PasswordForgotten", () => {
    const spyFetchRequestPasswordResetLink = jest.fn(() => {});

    beforeEach(() => {
        (useApi as jest.Mock).mockImplementation(() => [
            spyFetchRequestPasswordResetLink,
        ]);
    });

    it("should render without errors", async () => {
        render(<PasswordForgotten />);

        const passwordForgottenElement = screen.getByTestId(
            "PasswordForgottenStyled"
        );
        expect(passwordForgottenElement).toBeInTheDocument();
    });

    it("should submit and display confirmation message after click for reset link", async () => {
        render(<PasswordForgotten />);

        const emailInputElement = screen.getByRole("textbox");
        user.click(emailInputElement);
        await act(async () => {
            user.keyboard("email@test.com");
        });

        const sendLinkButtonElement = screen.getByRole("button");
        await act(async () => {
            user.click(sendLinkButtonElement);
        });

        const confirmationElement = await screen.findByText(
            /Link enviado! Olhe seu email./i
        );
        expect(confirmationElement).toBeInTheDocument();
    });
});
