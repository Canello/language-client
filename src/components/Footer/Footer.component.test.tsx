import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Footer } from "./Footer.component";

jest.mock("react-dom", () => {
    return {
        ...jest.requireActual("react-dom"),
        createPortal: (el: any) => el,
    };
});

describe("Footer", () => {
    it("should render without errors", async () => {
        render(<Footer />);

        const footerElement = screen.getByTestId("FooterStyled");
        expect(footerElement).toBeInTheDocument();
    });

    it("should open contact modal when contact link is clicked", async () => {
        render(<Footer />);

        const contactLinkElement = screen.getByText("Fale conosco");
        await act(async () => {
            user.click(contactLinkElement);
        });

        const contactModalElement = await screen.findByTestId(
            "ContactModalStyled"
        );
        expect(contactModalElement).toBeInTheDocument();
    });
});
