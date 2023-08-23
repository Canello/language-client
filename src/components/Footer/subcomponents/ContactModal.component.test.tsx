import { render, screen } from "@testing-library/react";
import { ContactModal } from "./ContactModal.component";

jest.mock("react-dom", () => {
    return {
        ...jest.requireActual("react-dom"),
        createPortal: (el: any) => el,
    };
});

describe("ContactModal", () => {
    it("should render without errors", async () => {
        render(<ContactModal isShowing={true} onClose={() => {}} />);

        const contactModalElement = screen.getByTestId("ContactModalStyled");
        expect(contactModalElement).toBeInTheDocument();
    });
});
